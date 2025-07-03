var mongoose = require("mongoose");

var movieSchema = mongoose.Schema({
  title: String,
  genres: [String],
  tmdbId: Number,
  watched: Boolean,
  rating: Number,
  mood: String,
  addedAt: {
    type: Date,
    default: Date.now
  }
});

var movieModel = mongoose.model("movie", movieSchema);
module.exports = movieModel;
