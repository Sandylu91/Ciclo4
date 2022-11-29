import React from "react";
//import axios from 'axios';
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import imagenes from "./imagenes";
import "./mascotas.css";


//const { APIHOST } = app;
export default class mascotas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
 

  render() {
    return (
      <Container id="login-container">
      
        <h1> GATOS </h1>
        <Row>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={imagenes.g1} />
              <Card.Body>
                <Card.Title>Aria</Card.Title>
                <Card.Text>
                 
                </Card.Text>
                <Button variant="primary">Más información</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={imagenes.g2} />
              <Card.Body>
                <Card.Title>Lucas</Card.Title>
                <Card.Text>
                 
                </Card.Text>
                <Button variant="primary">Más información
                            </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col></Col>
        </Row>
          
        <br/>

        <h1> PERROS </h1>
          <Row>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={imagenes.p1} />
              <Card.Body>
                <Card.Title>Bruno</Card.Title>
                <Card.Text>
                
                </Card.Text>
                <Button >Más información</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={imagenes.p2} />
              <Card.Body>
                <Card.Title>Max</Card.Title>
                <Card.Text>
               
                </Card.Text>
                <Button variant="primary">Más información</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={imagenes.p3} />
              <Card.Body>
                <Card.Title>Poli</Card.Title>
                <Card.Text>
                 
                </Card.Text>
                <Button variant="primary">Más información</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
