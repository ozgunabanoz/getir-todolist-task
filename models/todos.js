const mongoose = require('mongoose');

let todosSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 1
  },
  description: {
    type: String,
    required: true,
    minlength: 1
  },
  writer: {
    type: String,
    required: true,
    minlength: 1
  },
  status: {
    type: Boolean,
    required: true,
    default: false
  }
});

let Todos = mongoose.model('todos', todosSchema);

module.exports = { Todos };
