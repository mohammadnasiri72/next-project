const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  group: {
    type: String,
    required: true,
  }

});

const testimonialsModel = mongoose.models.Testimonial || mongoose.model("Testimonial", schema);

export default testimonialsModel;
