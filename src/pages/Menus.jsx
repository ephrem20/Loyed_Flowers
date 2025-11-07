import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import supabase from "../utility/supabaseClient";
import placeholderImg from "../assets/placeholder.png"; // fallback image
import { FadeLeft } from "../utility/animation";

const Menus = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const addToCart = (product) => {
    try {
      const cart = JSON.parse(localStorage.getItem("loyed_cart") || "[]");
      const exists = cart.find((p) => p.id === product.id);
      if (exists) {
        exists.quantity = (exists.quantity || 1) + 1;
      } else {
        cart.push({ ...product, quantity: 1 });
      }
      localStorage.setItem("loyed_cart", JSON.stringify(cart));
      alert(`${product.title} added to cart`);
    } catch (e) {
      console.error("Cart error:", e);
    }
  };

  useEffect(() => {
    let isMounted = true;

    const loadProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        const { data: rawProducts, error: fetchErr } = await supabase
          .from("products")
          .select("*")
          .order("id", { ascending: true });

        if (fetchErr) throw fetchErr;

        // Convert image paths to public URLs
        const productsWithUrls = (rawProducts || []).map((p) => {
          let image_url = placeholderImg;
          if (p.image_path) {
            const { data } = supabase.storage
              .from("loyedFlower_Images")
              .getPublicUrl(p.image_path);
            if (data?.publicUrl) image_url = data.publicUrl;
          }

          return {
            id: p.id,
            title: p.title,
            price: p.price,
            image_url,
            description: p.description || "",
          };
        });

        if (isMounted) setProducts(productsWithUrls);
      } catch (err) {
        console.error("Error loading products:", err);
        if (isMounted) setError(err.message || "Failed to load products");
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    loadProducts();
    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) {
    return (
      <section id="menu-section">
        <div className="container pt-12 pb-20">
          <h2 className="text-2xl font-bold pb-10 uppercase">Our Menu</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((n) => (
              <div
                key={n}
                className="bg-white rounded-3xl px-4 py-6 shadow animate-pulse"
              >
                <div className="h-40 bg-gray-200 rounded-lg mb-4" />
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-2" />
                <div className="h-6 bg-gray-200 rounded w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="menu-section">
        <div className="container pt-12 pb-20">
          <h2 className="text-2xl font-bold pb-10 uppercase">Our Menu</h2>
          <p className="text-red-600">Error: {error}</p>
        </div>
      </section>
    );
  }

  return (
    <section id="menu-section">
      <div className="container pt-12 pb-20">
        <motion.h1
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-2xl font-bold text-left pb-10 uppercase drop-shadow"
        >
          Our Menu
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.length === 0 ? (
            <p className="text-gray-500">No products available.</p>
          ) : (
            products.map((menu, idx) => (
              <motion.div
                variants={FadeLeft(0.2 + idx * 0.15)}
                initial="hidden"
                whileInView="visible"
                whileHover={{ scale: 1.03 }}
                key={menu.id}
                className="bg-white rounded-3xl px-4 py-4 shadow-lg flex flex-col items-start gap-3"
              >
                <img
                  src={menu.image_url}
                  alt={menu.title}
                  className="w-full h-40 object-cover rounded-xl mb-3"
                  onError={(e) => {
                    e.currentTarget.src = placeholderImg;
                  }}
                />
                <div className="flex-1 w-full">
                  <h3 className="text-lg font-semibold">{menu.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {menu.description}
                  </p>
                </div>

                <div className="w-full flex items-center justify-between">
                  <span className="text-lg font-semibold text-amber-600">
                    {menu.price} ETB
                  </span>
                  <button
                    onClick={() => addToCart(menu)}
                    className="px-3 py-1 rounded-xl bg-amber-500 text-white font-medium hover:bg-amber-600 transition"
                  >
                    Add to Cart
                  </button>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Menus;
