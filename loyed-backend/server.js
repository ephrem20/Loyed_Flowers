import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";
import productsRouter from "./routes/products.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to Supabase
const supabase = createClient(
  globalThis?.process?.env?.SUPABASE_URL,
  globalThis?.process?.env?.SUPABASE_SERVICE_KEY
);

// Make it available to routes
app.set("supabase", supabase);

// Routes
app.use("/api/products", productsRouter);

// Root route
app.get("/", (req, res) => {
  res.send("🌸 Flower Shop API is running!");
});

const PORT = globalThis?.process?.env?.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
export default app;
