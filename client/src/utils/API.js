import axios from "axios";

export default {
  // Gets all words
  getWords: function() {
    return axios.get("/api/words");
  },
  // Gets the words with the given id
  getWords: function(id) {
    return axios.get("/api/words/" + id);
  },
  // Deletes the words with the given ids
  deleteWords: function(id) {
    return axios.delete("/api/words/" + id);
  },
  // Saves a word to the database
  saveWords: function(wordsData) {
    return axios.post("/api/wordss", wordsData);
  }
};
