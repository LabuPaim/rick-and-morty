const mongoose = require('mongoose');

const Rick_and_morty__SCHEMA = new mongoose.Schema({
  sabor: {
    type: String,
    required: true,
  },
  descricao: {
    type: String,
    required: true,
  },
  foto: {
    type: String,
    required: true,
  },
  preco: {
    type: Number,
    required: true,
  },
});

const Rick_and_morty = mongoose.model('rick_and_morty', Rick_and_morty__SCHEMA);

module.exports = Rick_and_morty;
