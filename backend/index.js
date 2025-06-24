import express from "express"
import cors from"cors"

const app = express();
const port = 5000;

app.use(cors()); // Allow cross-origin requests
app.use(express.json());

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from backend!" });
});

app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});
