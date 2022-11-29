import React from "react";
import { Container, Row } from "react-bootstrap";
import "./fundaciones.css";
import { request } from "../helper/helper";
import DataGrid from "../grid/grid";

const columns = [
  {
    dataField: "id_fundacion",
    text: "ID",
  },
  {
    dataField: "nombre_fundacion",
    text: "Nombre",
  },
  {
    dataField: "direccion_fundacion",
    text: "Direccion",
  },
  {
    dataField: "telefono_fundacion",
    text: "Telefono",
  },
  { dataField: "ciudad_fundacion", text: "Ciudad" },
];

export default class FundacionesBuscar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    request
      .get(this.props.url)
      .then((response) => {
        this.setState({ rows: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <Container id="login-container">
        <Row>
          <h1> GATOS </h1>
        </Row>
        <Row>
          <DataGrid url="/buscarfundaciones" columns={columns} />
        </Row>
      </Container>
    );
  }
}
