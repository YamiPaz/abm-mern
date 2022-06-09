import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';


export default class EditarAlumno extends Component {

  constructor(props) {
    super(props)

    this.onChangeAlumnonombre = this.onChangeAlumnonombre.bind(this);
    this.onChangeAlumnoEmail = this.onChangeAlumnoEmail.bind(this);
    this.onChangeAlumnoregistro = this.onChangeAlumnoregistro.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      nombre: '',
      email: '',
      registro: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:4000/alumnos/editar-alumno/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          nombre: res.data.nombre,
          email: res.data.email,
          registro: res.data.registro
        });
      })
      .catch((error) => {
        console.log(error);
      })
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

    axios.put('http://localhost:4000/alumnos/actualizar-alumno/' + this.props.match.params.id, AlumnoObject)
      .then((res) => {
        console.log(res.data)
        console.log('Alumno actualizado correctamente')
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to Alumno List 
    this.props.history.push('/lista-alumno')
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
          <Form.Control type="text" value={this.state.registro} onChange={this.onChangeAlumnoregistro} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Actualizar alumno
        </Button>
      </Form>
    </div>);
  }
}