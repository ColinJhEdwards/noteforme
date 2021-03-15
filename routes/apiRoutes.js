const fs = require("fs");
const router = require("express").Router();
const db = require("../db/db.json");

router.get("/notes", (req, res) => {
  res.json(db);
});

router.post("/notes", (req, res) => {
  const { title, text } = req.body;
  const newNote = { title, text, id: Math.floor(Math.random() * 1000) };
  db.push(newNote);
  fs.writeFileSync("db/db.json", JSON.stringify(db));
  res.json(db);
});

router.delete("/notes:id", (req, res) => {
  const id = req.params.id;
});

module.exports = router;
