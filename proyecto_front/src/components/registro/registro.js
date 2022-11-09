import React from "react";
import { Button, Form, Container,  } from "react-bootstrap";
import  './registro.css'

export default class registro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        nombre:'',
        apellido:'',
        ciudad:'',
        telefono:'',
        email:'',
    };
   
  }
 registro(){
        alert('Se registrarán los siguientes datos \n' +this.state.nombre +
        '\n'+this.state.apellido+
        '\n'+this.state.ciudad+
        '\n'+this.state.telefono+
        '\n'+this.state.email);
      }
  render() {
    return (
      <Container id="container">
        <Form >
          <Form.Group className="mb-3" >
            <Form.Label>Nombres</Form.Label>
            <Form.Control type="text"  placeholder="Ingrese sus nombres"onChange={(e)=>{
this.setState({nombre:e.target.value})}}/>

          
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>Apellidos</Form.Label>
            <Form.Control type="text" 
placeholder="Ingrese sus apellidos" onChange={(e)=>{
    this.setState({apellido:e.target.value})}}/>
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>Ciudad</Form.Label>
            <Form.Control type="text" placeholder="Ciudad de residencia" onChange={(e)=>{
this.setState({ciudad:e.target.value})}}/>
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>Telefono</Form.Label>
            <Form.Control type="text" placeholder="Ingrese su telefono/celular" onChange={(e)=>{
this.setState({telefono:e.target.value})}} />
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>Correo electronico</Form.Label>
            <Form.Control type="email" placeholder="Ingrese su correo " onChange={(e)=>{
this.setState({email:e.target.value})}} />
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>Contrasena</Form.Label>
            <Form.Control type="password" placeholder="Ingrese contrasena" />
          </Form.Group>

        
          <Button type="submit" onClick={()=>{
this.registro();
          }}>
            Registrarse
          </Button>
                   
        </Form>
      </Container>
    );
  }
}
