import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Button from 'react-bootstrap/Button'

export default class TablaAlumnos extends Component {
  constructor(props) {
    super(props)
    this.eliminarAlumno = this.eliminarAlumno.bind(this)
  }

  eliminarAlumno() {
    axios
      .delete(
        'http://localhost:4000/alumnos/eliminar-alumno/' + this.props.obj._id,
      )
      .then((res) => {
        console.log('Alumno eliminado correctamente')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    return (
      <tr>
        <td>{this.props.obj.nombre}</td>
        <td>{this.props.obj.email}</td>
        <td>{this.props.obj.registro}</td>
        <td>
          <Link
            className="edit-link" path={"product/:id"}
            to={'/editar-alumno/' + this.props.obj._id}
          >
            Editar
          </Link>
          <Button onClick={this.eliminarAlumno} size="sm" variant="danger">
            Eliminar
          </Button>
        </td>
      </tr>
    )
  }
}
