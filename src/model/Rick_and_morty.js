const mongoose = require('mongoose');

const Rick_and_morty__SCHEMA = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  foto: {
    type: String,
    required: true,
  },
});

const Rick_and_morty = mongoose.model('rick_and_morty', Rick_and_morty__SCHEMA);

module.exports = Rick_and_morty;
