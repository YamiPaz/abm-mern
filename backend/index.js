let db = require('../backend/database/db') ;
let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');

// Express
const studentRoute = require('./routes/alumnoroute')

// Conexion a mongo
mongoose
  .connect(db.db)
  .then((x) => {
    console.log(`Conectado a Mongo! Nombre de la base de datos: "${x.connections[0].name}"`)
  })
  .catch((err) => {
    console.error('Error al conectarse a Mongo', err.reason)
  })

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());
app.use('/alumnos', studentRoute)



const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})



app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
