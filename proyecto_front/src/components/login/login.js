import React from "react";
//import axios from 'axios';
import { Container, Form, Button, Row,Col } from "react-bootstrap";
import'./login.css';


export default class login extends React.Component {
  constructor(props) {
    super(props);
    this.state={
              
    };
  }
  iniciarSesion(){
    if(this.state.usuario==="sandra" && this.state.pass==="1234"){
     alert('Sesion iniciada correctamente');  
    }
    else {alert('No  puede ingresar correctamente')}
   
  }
  render() {
    return (
      <Container id="login-container" >
       <Row>
        <Col>
        <Row>
            <h2>Iniciar sesión</h2>
        </Row>
        <Row>
        <Form>
          <Form.Group className="mb-3" style={{marginTop:50}}>
            <Form.Label>Correo electrónico</Form.Label>
            <Form.Control onChange={(e) => this.setState({usuario:e.target.value})} placeholder="Ingrese email" />
        
            <Form.Text className="text-muted">
                          </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label style={{marginTop:50}}>Contraseña</Form.Label>
            <Form.Control onChange={(e) => this.setState({pass:e.target.value})} placeholder="Ingrese contraseña" />
             
                      </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            
          </Form.Group>
          <Button  type="submit"  onClick={()=>{
this.iniciarSesion();
          }}>
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
