import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import InscribirAlumno from './components/inscribir-alumno.component'
import EditarAlumno from './components/editar-alumno.component'
import ListaAlumnos from './components/lista-alumno.component'
import { Image } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <img src={require('./utn-logo.jpg').default} width="100" height="50" />
                <Link to={'/inscribir-alumno'} className="nav-link">
                  Inscripción de alumnos - Universidad Tecnológica Nacional
                </Link>
              </Navbar.Brand>

              <Nav className="justify-content-end">
                <Nav>
                  <Link to={'/inscribir-alumno'} className="nav-link">
                    Inscribir Alumno
                  </Link>
                </Nav>

                <Nav>
                  <Link to={'/lista-alumno'} className="nav-link">
                    Lista de Alumnos
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>

        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Switch>
                  <Route
                    exact
                    path="/"
                    component={(props) => <InscribirAlumno {...props} />}
                  />
                  <Route
                    exact
                    path="/inscribir-alumno"
                    component={(props) => <InscribirAlumno {...props} />}
                  />
                  <Route
                    exact
                    path="/editar-alumno/:id"
                    component={(props) => <EditarAlumno {...props} />}
                  />
                  <Route
                    exact
                    path="/lista-alumno"
                    component={(props) => <ListaAlumnos {...props} />}
                  />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  )
}

export default App
