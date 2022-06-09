import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class InscribirAlumno extends Component {

  constructor(props) {
    super(props)

  
    this.onChangeAlumnonombre = this.onChangeAlumnonombre.bind(this);
    this.onChangeAlumnoEmail = this.onChangeAlumnoEmail.bind(this);
    this.onChangeAlumnoregistro = this.onChangeAlumnoregistro.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    
    this.state = {
      nombre: '',
      email: '',
      registro: ''
    }
  }

  onChangeAlumnonombre(e) {
    this.setState({ nombre: e.target.value })
  }

  onChangeAlumnoEmail(e) {
    this.setState({ email: e.target.value })
  }

  onChangeAlumnoregistro(e) {
    this.setState({ registro: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const AlumnoObject = {
      nombre: this.state.nombre,
      email: this.state.email,
      registro: this.state.registro
    };
    axios.post('http://localhost:4000/alumnos/inscribir-alumno', AlumnoObject)
      .then(res => console.log(res.data));

    this.setState({ nombre: '', email: '', registro: '' })
  }

  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="nombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" value={this.state.nombre} onChange={this.onChangeAlumnonombre} />
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={this.state.email} onChange={this.onChangeAlumnoEmail} />
        </Form.Group>

        <Form.Group controlId="nombre">
          <Form.Label>Registro</Form.Label>
          <Form.Control type="number" value={this.state.registro} onChange={this.onChangeAlumnoregistro} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit" className="mt-4">
          Inscribir Alumno
        </Button>
      </Form>
    </div>);
  }
}