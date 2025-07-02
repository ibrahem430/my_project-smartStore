import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import cors from "cors";

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
app.use(express.static("public")); // This serves /public/images

app.get("/product", (req, res) => {
  const sql = "SELECT * FROM product";
  db.query(sql, (err, result) => {
    if (err) return res.status(500).json(err);
    return res.json(result.rows); // PostgreSQL stores results in rows
  });
});
app.get("/",(req,res)=>{
  res.send("hello")
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
