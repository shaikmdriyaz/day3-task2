import express from "express";

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());

app.get("/riyaz", (req, res) => {
  res.status(200).json({ ok: true, message: "this is riyaz" });
});

app.get("/", (req, res) => {
  res.status(200).send("Welcome to THS Class");
});

app.post("/register", (req, res) => {
  const userData = req.body;

    console.log("📥 Incoming /register payload:", userData);
res.json(userData)
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});