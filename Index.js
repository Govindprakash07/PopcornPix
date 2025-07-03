var express = require("express");
var app = express();
var port = 3030;
var cors = require("cors");
app.use(cors());



require("./Db");
var cors = require("cors");
var mongoose = require("mongoose");

app.use(cors());
app.use(express.json());


app.post("/recommend", async (req, res) => {
    console.log("POST /recommend received");
console.log("Request body:", req.body);
  const { mood, genres } = req.body;
  try {

    res.json([
      { title: "Inception", genres: ["action", "sci-fi"], mood: "happy" },
      { title: "La La Land", genres: ["romance", "music"], mood: "happy" }
    ]);
  } catch (error) {
    res.status(500).json({ error: "Recommendation failed" });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
