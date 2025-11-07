import express from "express";
const router = express.Router();

router.get("/", async (req, res) => {
  const supabase = req.app.get("supabase");

  const { data, error } = await supabase.from("products").select("*");

  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
});

router.post("/", async (req, res) => {
  const supabase = req.app.get("supabase");
  const { name, description, price, image_url, category_id } = req.body;

  const { data, error } = await supabase
    .from("products")
    .insert([{ name, description, price, category_id }])
    .select();

  if (error) return res.status(400).json({ error: error.message });
  res.status(201).json(data[0]);
});

export default router;
