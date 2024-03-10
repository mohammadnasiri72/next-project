const mongoose = require('mongoose');

const schema = mongoose.Schema({
    title: {
    type: String,
    required: true,
    // minLength, maxLength
  },

  price: {
    type: String,
    required: true,
  },

  desc: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
  off: {
    type: Number,
    required: true,
  },
  img: {
    type: String,
    required: true,
  }
});

const productModel = mongoose.models.Product || mongoose.model("Product" , schema )

export default productModel;
