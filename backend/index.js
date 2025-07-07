import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import cors from "cors";
import path from "path"


import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express();
const port = 5000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "TeckSmart",
  password: "2003",
  port: 5432,
});

db.connect();

app.use(cors()); // <--- You forgot this
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json()); // Good practice if you want to handle JSON too


app.use("/image", express.static(path.join(__dirname, "image")));


app.get("/product", (req, res) => {
  const sql = "SELECT * FROM product";
  db.query(sql, (err, result) => {
    if (err) return res.status(500).json(err);
    return res.json(result.rows); // PostgreSQL stores results in rows
  });
});

app.get("/advertisements", (req, res) => {
  const sql = "SELECT * FROM advertisements";
  db.query(sql, (err, result) => {
    if (err) return res.status(500).json(err);
    return res.json(result.rows); // PostgreSQL stores results in rows
  });
});
app.get("/",(req,res)=>{
  res.send("hello")
})


app.post("/api/cart/add", async (req, res) => {
  const { userId, productId, quantity } = req.body;

  try {
    const existing = await pool.query(
      "SELECT * FROM cart WHERE user_id = $1 AND product_id = $2",
      [userId, productId]
    );

    if (existing.rows.length > 0) {
      await pool.query(
        "UPDATE cart SET quantity = quantity + $1 WHERE user_id = $2 AND product_id = $3",
        [quantity, userId, productId]
      );
    } else {
      await pool.query(
        "INSERT INTO cart (user_id, product_id, quantity) VALUES ($1, $2, $3)",
        [userId, productId, quantity]
      );
    }

    res.json({ message: "Item added to cart" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Add to cart failed" });
  }
});

// ✅ Get cart by user
app.get("/api/cart/:userId", async (req, res) => {
  const userId = req.params.userId;

  try {
    const result = await pool.query(
      `SELECT c.id, c.product_id, c.quantity, p.name, p.new_price AS price, p.image
       FROM cart c
       JOIN product p ON c.product_id = p.id
       WHERE c.user_id = $1`,
      [userId]
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: "Fetch cart failed" });
  }
});

// ✅ Remove item
app.delete("/api/cart/remove", async (req, res) => {
  const { userId, productId } = req.body;

  try {
    await pool.query(
      "DELETE FROM cart WHERE user_id = $1 AND product_id = $2",
      [userId, productId]
    );
    res.json({ message: "Item removed" });
  } catch (err) {
    res.status(500).json({ error: "Remove failed" });
  }
});

// ✅ Clear cart
app.post("/api/cart/clear", async (req, res) => {
  const { userId } = req.body;

  try {
    await pool.query("DELETE FROM cart WHERE user_id = $1", [userId]);
    res.json({ message: "Cart cleared" });
  } catch (err) {
    res.status(500).json({ error: "Clear failed" });
  }
});


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
