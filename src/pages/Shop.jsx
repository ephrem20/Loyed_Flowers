import { useState } from "react";

const Shop = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    flowerType: "",
    quantity: "",
    note: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here (e.g., send to backend or show a message)
    alert("Order submitted!\n" + JSON.stringify(form, null, 2));
    setForm({
      name: "",
      phone: "",
      address: "",
      flowerType: "",
      quantity: "",
      note: "",
    });
  };

  return (
    <section id="Shop-section">
      <div className="container max-w-lg mx-auto bg-secondary/5 rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-primary text-center">Order Flowers</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full border rounded px-3 py-2"
            required
          />
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full border rounded px-3 py-2"
            required
          />
          <input
            type="text"
            name="address"
            value={form.address}
            onChange={handleChange}
            placeholder="Delivery Address"
            className="w-full border rounded px-3 py-2"
            required
          />
          <select
            name="flowerType"
            value={form.flowerType}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          >
            <option value="">Select Flower Type</option>
            <option value="Roses">Roses</option>
            <option value="Lilies">Lilies</option>
            <option value="Tulips">Tulips</option>
            <option value="Mixed Bouquet">Mixed Bouquet</option>
          </select>
          <input
            type="number"
            name="quantity"
            value={form.quantity}
            onChange={handleChange}
            placeholder="Enter quantity"
            className="w-full border rounded px-3 py-2"
            required
          />
          <textarea
            name="note"
            value={form.note}
            onChange={handleChange}
            placeholder="Additional Note (optional)"
            className="w-full border rounded px-3 py-2"
            rows={3}
          />
          <div className="flex justify-center">
  <button
    type="submit"
    className="w-full sm:w-48 md:w-72 lg:w-full bg-primary text-white py-2 
    rounded font-bold hover:bg-primary/80 transition blink shadow-lg"
  >
    Place Order
  </button>
</div>
  //when button is clicked send it on telegram or SMS and give an order id and recipt 
  //for user and the supplier too
        </form>
      </div>
    </section>
  );
};

export default Shop;