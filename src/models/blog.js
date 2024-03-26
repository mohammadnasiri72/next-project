const mongoose = require("mongoose");

const schema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  }
});

const blogModel = mongoose.models.Blog || mongoose.model("Blog", schema);

export default blogModel;
