import { useState } from 'react'
import './App.css'
import {Navbar, Container, Nav} from 'react-bootstrap';
import data from './data.js';
import Home from './routes/Home.jsx';
import Detail from './routes/Detail.jsx';
import {BrowserRouter, Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'

function App() {

  let [shoes] = useState(data);
  let navigate = useNavigate();
  
  return (
    <div className="App">
        
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick ={()=>{navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick ={()=>{navigate('/detail/:id')}}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      
      <Routes>
        <Route path="/" element={<Home shoes={shoes} />} />
        <Route path = "/detail/:id" element = {<Detail shoes={shoes}/>} />
        <Route path = "/about" element = {<About />}>
          <Route path = "location" element = {<div>로케이션임</div>}/>
          <Route path = "member" element = {<About />}/>
        </Route>
        <Route path = "*" element = {<div>없는 페이지에요!</div>} />
      </Routes>

    
    </div>
  );
}

function About(){
  return(
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  )
}

function Event(){
  return(
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}

export default App
