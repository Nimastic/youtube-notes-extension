const express = require('express');
const Note = require('../models/Notes');
const router = express.Router();

router.get('/', async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
});

router.post('/', async (req, res) => {
  const newNote = new Note({
    content: req.body.content,
    timestamp: req.body.timestamp,
    videoId: req.body.videoId
  });
  const savedNote = await newNote.save();
  res.json(savedNote);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await Note.findByIdAndDelete(id);
  res.json({ message: 'Note deleted' });
});

module.exports = router;
