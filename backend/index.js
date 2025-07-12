import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import cors from "cors";
import path from "path"


import { fileURLToPath } from 'url';
import { count } from "console";


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
app.get("/getTheProduct",(req,res)=>{
  const sql="SELECT * FROM cart";
  db.query(sql,(err,result)=>{
    if (err) return res.status(500).json(err);
    return res.json(result.rows);
  })
})

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


app.post('/add-to-cart', async (req, res) => {
  const { user_id, product_id, quantity, name_product, price } = req.body;

  try {
    await db.query(
      `INSERT INTO cart (user_id, product_id, quantity, name_product, price) VALUES ($1, $2, $3, $4, $5)`,
      [user_id, product_id, quantity, name_product, price]
    );
    res.status(200).send("Item added to cart");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error adding to cart");
  }
});

app.delete("/delete-product/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await db.query("DELETE FROM cart WHERE id = $1", [id]);
    res.send("Deleted successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("Failed to delete");
  }
});


app.get('/cart-count', async (req, res) => {
try {
    const userId = 1; 

    const result = await db.query(
      'SELECT SUM(quantity) AS total FROM cart WHERE user_id = $1',
      [userId]
    );

    const total = result.rows[0].total || 0;
    res.json({ count: result.rows[0].total||0 });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching count');
  }

});
app.get('/price-count', async (req, res) => {
try {
    const userId = 1; 

    const result = await db.query(
      'SELECT SUM(price) AS total FROM cart WHERE user_id = $1',
      [userId]
    );

    const total = result.rows[0].total || 0;
    res.json({ count: result.rows[0].total||0 });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching count');
  }

});
app.put("/update-cart", async (req, res) => {
  const { user_id, product_id, quantity } = req.body;

  try {
    const result = await db.query(
      'UPDATE cart SET quantity = $1 WHERE user_id = $2 AND product_id = $3 RETURNING *',
      [quantity, user_id, product_id]
    );

    res.json({ updated: result.rows[0] });
  } catch (err) {
    console.error('Update error:', err);
    res.status(500).send('Error updating cart item');
  }
});


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
