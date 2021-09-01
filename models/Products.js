const mongoose = require("mongoose");

/**
 * Products Schema
 */

const InfoSchema = mongoose.Schema({
  sold_quantity: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  source: {},
  created: { type: Date, default: Date.now() },
});

const ProductsSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Array,
    required: true,
    trim: true,
  },
  picture: {
    type: String,
    required: true,
  },
  condition: {
    type: String,
    required: true,
  },
  free_shipping: {
    type: Boolean,
    required: true,
  },
  info: { type: mongoose.Schema.Types.ObjectId, ref: "Info" },
  created: { type: Date, default: Date.now() },
});

const Products = mongoose.model("Products", ProductsSchema);
const Info = mongoose.model("Info", InfoSchema);

module.exports = {
  Products,
  Info,
};
