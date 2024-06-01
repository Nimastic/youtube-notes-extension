const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
  content: String,
  timestamp: String,
  videoId: String,
});

module.exports = mongoose.model('Note', NoteSchema);
