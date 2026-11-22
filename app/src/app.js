const express = require("express");
const app = express();
app.use(express.json());

app.get("/health", (req, res) => res.status(200).json({ status: "ok" }));
app.get("/rooms", (req, res) =>
  res.json([{ id: 1, name: "Heritage Suite", price: 8500 }]));
app.post("/enquiries", (req, res) =>
  res.status(201).json({ received: req.body }));

module.exports = app;