const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const wordsSchema = new Schema({
  word: { type: String, required: true },
  meaning: { type: String, required: true },
  link: { type: String, required: true },
});

const Words = mongoose.model("Word", wordsSchema);

module.exports = Words;