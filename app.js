const express = require("express");
const cors = require("cors")
const transactionsControllers = require("./controllers/transactionsControllers")

const app = express();

app.use(express.json());
app.use(cors())

app.get("/", (req, res) => {
    res.send("Get this money!");
  });

app.use("/entries", transactionsControllers);

app.get("*", (req, res) => {
  res.status(404).json({ error: "Page not found" });
});

module.exports = app;