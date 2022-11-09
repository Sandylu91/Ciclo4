import React from "react";
import  { Container, Navbar, Nav,Button} from 'react-bootstrap'
import './navbar.css'
import corazon from './imagenes/cora.png' 


export default class menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  registrarse(){
    alert('Sera redireccionado para registrarse');
  }
  iniciarSesion(){

    

    alert('Boton de iniciar sesion');
  }
  render() {
    return (
        
        <Navbar  id="navbar-menu" collapseOnSelect expand="lg" >
        <div>
          <img className='Corazon' src={corazon} alt='Corazon' id="logo" />  
        </div>
        
        
               <Container id="container-menu">
        
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link id="link1" href="inicio" active>Inicio</Nav.Link>
              <Nav.Link id="link1"href="mascotas" active>Mascotas</Nav.Link>
              <Nav.Link id="link1"href="fundaciones" active>Fundaciones</Nav.Link>
              <Nav.Link id="link1"href="historias"active>Historias</Nav.Link>
             
            </Nav>
                         <Button  type="submit" onClick={()=>{
this.registrarse();
          }} >Regístrate</Button>

<Button  type="submit"  onClick={()=>{
this.iniciarSesion();
          }}>
            Iniciar sesión
          </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>





  
    );
  }
}
