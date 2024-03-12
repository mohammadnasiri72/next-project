const mongoose = require("mongoose");

const schema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  }
});

const newsLettersModel = mongoose.models.NewsLetters || mongoose.model("NewsLetters", schema);

export default newsLettersModel;
