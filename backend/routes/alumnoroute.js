let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router()

// Modelo Alumno
let alumnoSchema = require('../Models/Alumno')

// Crear alumno
router.route('/inscribir-alumno').post((req, res, next) => {
  alumnoSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
})

// Leer alumnos
router.route('/').get((req, res) => {
  alumnoSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Traer un alumno
router.route('/editar-alumno/:id').get((req, res) => {
  alumnoSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Actualizar alumno
router.route('/actualizar-alumno/:id').put((req, res, next) => {
  alumnoSchema.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error)
        console.log(error)
      } else {
        res.json(data)
        console.log('Alumno actualizado correctamente!')
      }
    },
  )
})

// Borrar alumno
router.route('/eliminar-alumno/:id').delete((req, res, next) => {
  alumnoSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.status(200).json({
        msg: data,
      })
    }
  })
})

module.exports = router
