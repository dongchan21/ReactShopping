import { useState } from 'react'
import './App.css'
import {Navbar, Container, Nav} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import data from './data.js';

function App() {

  let [shoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg"></div>

    <Container>
      <Row>
        {shoes.map((a, i) => (
          <Card shoes={shoes[i]} i={i+1}/>
        ))}
      </Row>
    </Container>

    </div>
  );
}

function Card({shoe}) {
  return (
      <Col sm>
      <img src={shoe.imageUrl} width="80%"/>
      <h4>{shoe.title}</h4>
      <p>{shoe.price}원</p>
      </Col>
  );
}
export default App
