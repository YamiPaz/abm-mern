import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import TablaAlumnos from './tablaalumnos';


export default class ListaAlumnos extends Component {

  constructor(props) {
    super(props)
    this.state = {
      alumnos: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:4000/alumnos/')
      .then(res => {
        this.setState({
          alumnos: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  
  DataTable() {
    return this.state.alumnos.map((res, i) => {
      return <TablaAlumnos obj={res} key={i} />;
    });
  }


  render() {
    return (<div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Registro</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
    </div>);
  }
}