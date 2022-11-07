import { CircleNotificationsOutlined, FavoriteBorderOutlined, Inventory2Outlined, LoginOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import React from 'react'
import { Container,  Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';




const home = {
    marginRight:"10%",
    marginRight:"25%"
}


const Navigation = () => {
  return (
    <>
    <Navbar bg="light p-3 fixed-top" expand="lg">
      <Container>
        <Navbar.Brand style={home} href="#home">BRACE SHOPIFY </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link style={{marginLeft:"20px"}} href="#home">Men</Nav.Link>
            <Nav.Link style={{marginLeft:"20px"}} href="#link">Women</Nav.Link>
            <Nav.Link style={{marginLeft:"20px"}} href="#link2">Kids</Nav.Link>
            <Nav.Link style={{marginLeft:"20px"}} href="#link3">Vintage</Nav.Link>
            <Nav.Link me="3" style={{marginLeft:"20px"}} href="#link4">Popular</Nav.Link>

          </Nav>
          <Nav.Link style={{margin:"10px"}} href="#link4"> <Link style={{textDecoration:"none", color:"black"}} to='/cart'><ShoppingCartOutlined/> Cart</Link> </Nav.Link>
          <NavDropdown  style={{margin:"10px"}}   title="Account" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.2"> <CircleNotificationsOutlined/> Notifications</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4"> <Inventory2Outlined/> Orders</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4"> <FavoriteBorderOutlined/> Favourites</NavDropdown.Item>
              <NavDropdown.Item > <Link style={{textDecoration:"none", color:"black"}} to='/login'><LoginOutlined/> Login</Link> </NavDropdown.Item>
            </NavDropdown>
         

        </Navbar.Collapse>
      </Container>      
    </Navbar>
    

    {/* <Form.Control style={search} type="text" name='search' placeholder="What are you looking for ..." /> */}
    </>

  )
}

export default Navigation