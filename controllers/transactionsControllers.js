const express = require("express");
const transactions = express.Router();
const transactionsArray = require("../models/transactions.js");

transactions.get("/", (req, res) => {
  res.json(transactionsArray);
});

transactions.get("/:id", (req, res) => {
  const id = req.params.id;
  if (transactionsArray[id]) {
    res.json(transactionsArray[id]);
  } else {
    res.status(404).json({ error: "Item with ID not found" });
  }
});

// Add validateItem function
transactions.post("/", (req, res) => {
  transactionsArray.push(req.body);
  res.json(transactionsArray[transactionsArray.length - 1]);
});

transactions.delete("/:id", (req, res) => {
  const id = req.params.id;
  if (transactionsArray[id]) {
    transactionsArray.splice(id, 1);
    res.json(transactionsArray);
  } else {
    res.status(404).json({ error: "Item with ID not found" });
  }
});

transactions.put("/:id", (req, res) => {
  const id = req.params.id;
  if (transactionsArray[id]) {
    transactionsArray[id] = req.body;
    res.status(200).json(transactionsArray[id]);
  } else {
    res.status(404).json({ error: "Item with ID not found" });
  }
});

// 404 Catch all
// transactions.get("*", (req, res) => {
//   res.json({ error: "Page not found" });
// });

module.exports = transactions;