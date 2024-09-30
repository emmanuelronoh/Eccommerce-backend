const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// Get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create a product
router.post('/', async (req, res) => {
  const { name, description, price, imageUrl, category, stock } = req.body;
  try {
    const newProduct = new Product({ name, description, price, imageUrl, category, stock });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
