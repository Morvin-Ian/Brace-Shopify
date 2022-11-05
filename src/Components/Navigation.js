import { CircleNotifications, FavoriteOutlined, Inventory, LoginOutlined, ShoppingCart } from '@mui/icons-material';
import React from 'react'
import { Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';




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
      <Container>
        <Navbar.Brand style={home} href="#home">Brace Shopify</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link style={{margin:"10px"}} href="#home">Men</Nav.Link>
            <Nav.Link style={{margin:"10px"}} href="#link">Women</Nav.Link>
            <Nav.Link style={{margin:"10px"}} href="#link2">Kids</Nav.Link>
            <Nav.Link style={{margin:"10px"}} href="#link3">Vintage</Nav.Link>
            <Nav.Link me="3" style={{marginLeft:"10px"}} href="#link4"></Nav.Link>

          
            <NavDropdown style={{margin:"10px"}}  title="Account" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.2"> <CircleNotifications/> Notifications</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4"> <Inventory/> Orders</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4"> <FavoriteOutlined/> Favourites</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1"> <Link style={{textDecoration:"none", color:"black"}} to='/login'><LoginOutlined/> Login</Link> </NavDropdown.Item>
            </NavDropdown>

          </Nav>
          <Nav.Link href="#link4"> <Link style={{textDecoration:"none", color:"black"}} to='/cart'><ShoppingCart/> Cart</Link> </Nav.Link>

         

        </Navbar.Collapse>
      </Container>
      
    </Navbar>

    {/* <Form.Control style={search} type="text" name='search' placeholder="What are you looking for ..." /> */}
    </>
  )
}

export default Navigation