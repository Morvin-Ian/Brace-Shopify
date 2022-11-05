import { ShoppingCart } from '@mui/icons-material';
import React from 'react'
import { Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';



const home = {
    marginRight:"10%"
}

const search ={
    width:"30%",
    marginRight:"15%"
}

const Navigation = () => {
  return (
    <>
    <Navbar bg="light p-3 fixed-top" expand="lg">
      <Container fluid>
        <Navbar.Brand style={home} href="#home">Brace Shopify</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Men</Nav.Link>
            <Nav.Link href="#link">Women</Nav.Link>
            <Nav.Link href="#link2">Kids</Nav.Link>
            <Nav.Link href="#link3">Vintage</Nav.Link>
            <Nav.Link me="3" href="#link4"></Nav.Link>

          </Nav>
          <Form.Control style={search} type="text" name='search' placeholder="What are you looking for ..." />
          <Nav.Link href="#link4"><ShoppingCart/> Cart</Nav.Link>
          
          <NavDropdown style={{marginRight:"10%", marginLeft:"5%"}} title="Account" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Login</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Notifications</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Orders</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Favourites</NavDropdown.Item>
            </NavDropdown>

        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Navigation