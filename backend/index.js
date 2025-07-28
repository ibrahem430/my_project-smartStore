import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import cors from "cors";
import path from "path";

import { fileURLToPath } from "url";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use("/image", express.static(path.join(__dirname, "image")));

app.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const result = await db.query(
      'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *',
      [username, email, hashedPassword]
    );
    res.status(200).json({ user: result.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error registering user');
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const result = await db.query('SELECT * FROM users WHERE email = $1', [email]);
    const user = result.rows[0];
    if (!user) return res.status(400).send('User not found');
    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).send('Incorrect password');
    const token = jwt.sign({ id: user.id }, 'your_secret_key', { expiresIn: '1h' });
    res.json({ token, userId: user.id });
  } catch (err) {
    console.error(err);
    res.status(500).send('Login error');
  }
});

app.get("/product", (req, res) => {
  const sql = "SELECT * FROM product";
  db.query(sql, (err, result) => {
    if (err) return res.status(500).json(err);
    return res.json(result.rows);
  });
});

// Get cart items for user
app.get('/getTheProduct/:userId', (req, res) => {
  const userId = parseInt(req.params.userId);
  db.query('SELECT * FROM cart WHERE user_id = $1', [userId], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result.rows);
  });
});

app.get("/allproduct", async(req,res)=>{
  try{
  const result= await db.query ('SELECT *FROM product');
  
  res.json(result.rows)}
  catch (err) {
    console.log(err)
  }
})
  
app.delete("/deleteProduct/:id",async (req,res)=>{
  const {id} =req.params;
  try{
  await db.query("DELETE FROM product WHERE id =($1)",
    [id]
  )
   res.status(200).json({ message: "Product deleted successfully" });
  } catch(err){
   console.log(err)
  }

})
// Add item to cart
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
app.post('/add-to-product', async (req, res) => {
  const { id, name, category, image, new_price, old_price,processorgeneration ,processorfamily,processorspeed,processorcache,	numberofcores,	ramcapacity,memorytype,	storagecapacity	,storagetype,graphicmanufacturer	,graphicmodel,	boostclock,	tgp,	graphicmemory	,graphicmemorytype	,graphicmemorysource,displaysize	,displaytechnology,	displayresolution,	keyboard,	type,	offer,isnew,ports,	contrastratio,	responsetime,	signalfrequency,	coolingsystemmodel,	casemodel,	lighttype,	powersupply,	keyboardfeatures,opticaldrive,	camera,	audio,	fingerprint,	networking	,batterynumberofcells	,operationsystem,	warranty,	weightanddimensions,	touchscreen
 } = req.body;

  try {
   await db.query(
  `INSERT INTO product (
    id, name, category, image, new_price, old_price,
    processorgeneration, processorfamily, processorspeed, processorcache,
    numberofcores, ramcapacity, memorytype, storagecapacity, storagetype,
    graphicmanufacturer, graphicmodel, boostclock, tgp, graphicmemory,
    graphicmemorytype, graphicmemorysource, displaysize, displaytechnology,
    displayresolution, keyboard, type, offer, isnew, ports, contrastratio,
    responsetime, signalfrequency, coolingsystemmodel, casemodel, lighttype,
    powersupply, keyboardfeatures, opticaldrive, camera, audio, fingerprint,
    networking, batterynumberofcells, operationsystem, warranty,
    weightanddimensions, touchscreen
  ) VALUES (
    $1, $2, $3, $4, $5, $6, $7, $8, $9, $10,
    $11, $12, $13, $14, $15, $16, $17, $18, $19, $20,
    $21, $22, $23, $24, $25, $26, $27, $28, $29, $30,
    $31, $32, $33, $34, $35, $36, $37, $38, $39, $40,
    $41, $42, $43, $44, $45, $46, $47, $48
  )`,
  [
    id, name, category, image, new_price, old_price,
    processorgeneration, processorfamily, processorspeed, processorcache,
    numberofcores, ramcapacity, memorytype, storagecapacity, storagetype,
    graphicmanufacturer, graphicmodel, boostclock, tgp, graphicmemory,
    graphicmemorytype, graphicmemorysource, displaysize, displaytechnology,
    displayresolution, keyboard, type, offer, isnew, ports, contrastratio,
    responsetime, signalfrequency, coolingsystemmodel, casemodel, lighttype,
    powersupply, keyboardfeatures, opticaldrive, camera, audio, fingerprint,
    networking, batterynumberofcells, operationsystem, warranty,
    weightanddimensions, touchscreen
  ]
);

   
    res.status(200).send("Added a new product");
  } catch (err) {
    console.error("Error inserting product:", err);
    res.status(500).send("Error adding product");
  }
});


// Delete item from cart
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

// Get total cart count (sum quantity) for user
app.get('/cart-count/:userId', async (req, res) => {
  try {
    const userId = parseInt(req.params.userId);
    const result = await db.query(
      'SELECT SUM(quantity) AS total FROM cart WHERE user_id = $1',
      [userId]
    );
    res.json({ count: result.rows[0].total || 0 });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching count');
  }
});

app.get('/cart-count/:userId', async (req, res) => {
  try {
    const userId = parseInt(req.params.userId);
    const result = await db.query(
      'SELECT SUM(price) AS total FROM cart WHERE user_id = $1',
      [userId]
    );
    res.json({ count: result.rows[0].total || 0 });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching count');
  }
});
// Get total price sum for user
app.get('/price-count/:userId', async (req, res) => {
  try {
    const userId = parseInt(req.params.userId);
    const result = await db.query(
      'SELECT SUM(price * quantity) AS total FROM cart WHERE user_id = $1',
      [userId]
    );
    res.json({ count: result.rows[0].total || 0 });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching count');
  }
});

// Update cart quantity for user and product
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
app.put("/updateproduct", async (req, res) => {
  const { id, offer, isnew, new_price } = req.body;

  try {
    const result = await db.query(
      `UPDATE product 
       SET offer = $2, isnew = $3, new_price = $4 
       WHERE id = $1 
       RETURNING *`,
      [id, offer, isnew, new_price]
    );

    res.json({ updated: result.rows[0] });
  } catch (err) {
    console.error("Update error:", err);
    res.status(500).send("Error updating product");
  }
});


app.get("/advertisements", (req, res) => {
  const sql = "SELECT * FROM advertisements";
  db.query(sql, (err, result) => {
    if (err) return res.status(500).json(err);
    return res.json(result.rows); // PostgreSQL stores results in rows
  });
});
app.get("/allcart", async(req,res)=>{
  try{
   const sql=await db.query("SELECT *FROM cart") 
   res.json(sql.rows)
  }catch(err){
     console.log(err)
  }
})

app.get("/allUser", async(req,res)=>{
  try{
   const sql=await db.query("SELECT *FROM users") 
   res.json(sql.rows)
  }catch(err){
     console.log(err)
  }
})
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});


