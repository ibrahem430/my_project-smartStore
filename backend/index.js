import express from "express"


const app = express();
const port = 5000;


app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello")
});

app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});
