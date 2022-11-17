import React from "react";
import axios from "axios";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import app from "../../app.json"
import "./login.css";
import {isNull} from "util"; 
import Cookies from "universal-cookie" 
import {calcularExpiraSesion} from "../helper/helper"

const {APIHOST}=app;

const cookies =new Cookies(); 
export default class login extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        usuario:'',
        pass:"",
    };
  }
  iniciarSesion() {
   
    axios.post(`${APIHOST}/contrasenas/login`, {
        usuario: this.state.usuario,
        pass: this.state.pass,
      })
      .then((response) => {
        if (isNull(response.data.token)){
         alert("Usuario y/o contrasena invalido");
        }
        else {
          cookies.set('_s', response.data.token,
          {path: '/', 
        expires: calcularExpiraSesion(),
    
      })
      }})
      .catch((err) => {
        console.log(err);
      });
    //alert('Inicio de sesion');
  }
  render() {
    return (
      <Container id="login-container">
        <Row>
          <Col>
            <Row>
              <h2>Iniciar sesión</h2>
            </Row>
            <Row>
              <Form>
                <Form.Group className="mb-3" style={{ marginTop: 50 }}>
                  <Form.Label>Correo electrónico</Form.Label>
                  <Form.Control
                    onChange={(e) => this.setState({ usuario: e.target.value })}
                    placeholder="Ingrese email"
                  />

                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label style={{ marginTop: 50 }}>Contraseña</Form.Label>
                  <Form.Control
                    onChange={(e) => this.setState({ pass: e.target.value })}
                    placeholder="Ingrese contraseña"
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="formBasicCheckbox"
                ></Form.Group>
                <Button  onClick={() => {
                    this.iniciarSesion();
                  }}
                >
                  Iniciar sesión
                </Button>
              </Form>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
