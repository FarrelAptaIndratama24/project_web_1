const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: String, required: true },
  image: { type: String, required: true },
  thumbnails: [{ type: String }],
  colors: [{ type: String }],
  sizes: [{ type: String }],
  stock: { type: Number, required: true },
});

module.exports = mongoose.model("Product", productSchema);
