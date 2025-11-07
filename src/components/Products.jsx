import { useEffect, useState } from "react";
import { supabase } from "../utility/supabaseClient";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase.from("products").select("*");
      if (error) console.error("Error fetching products:", error);
      else setProducts(data);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading flowers...</p>;

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center text-pink-700">Our Flowers</h2>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {products.map((flower) => (
          <div
            key={flower.id}
            className="bg-white shadow-lg rounded-xl p-4 hover:shadow-pink-300 transition"
          >
            {flower.image_url && (
              <img
                src={flower.image_url}
                alt={flower.name}
                className="w-full h-56 object-cover rounded-md"
              />
            )}
            <h3 className="text-xl font-semibold mt-3">{flower.name}</h3>
            <p className="text-gray-600 text-sm mt-1">{flower.description}</p>
            <p className="text-pink-700 font-bold mt-2">${flower.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
