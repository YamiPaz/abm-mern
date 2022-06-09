const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let alumnoSchema = new Schema({
  nombre: {
    type: String
  },
  email: {
    type: String
  },
  registro: {
    type: Number
  }
}, {
    collection: 'alumnos'
  })

module.exports = mongoose.model('Alumno', alumnoSchema)