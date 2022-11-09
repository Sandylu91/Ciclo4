import React from "react";
//import axios from 'axios';
import { Container, Carousel } from "react-bootstrap";
import imagenes from './imagenes'
import './inicio.css'


export default class inicio extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        
    };
  }
  iniciarSesion(){

    alert('Boton de iniciar sesion');
  }
  registrarse(){
    alert('Sera redireccionado para registrarse');
  }
  render() {
    return (
      <Container id="login-container" >
       
        
        <Carousel fade>
      <Carousel.Item>
        <img className=" w-100" src={imagenes.im1}alt=""   />
        <Carousel.Caption><h3>Adopta, es el mayor acto de amor</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className=" w-100" src={imagenes.im2} alt=""/>

        <Carousel.Caption> <h3>Tú eres su mejor amigo</h3> </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="w-100"  src={imagenes.im3} alt=""    />

        <Carousel.Caption>
          <h3>Ellos te necesitan</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        
              
      </Container>
    );
  }
}
