import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import logo from '../../../images/logo.jpeg';
import './navbar.css';
import { FaUserCircle } from 'react-icons/fa';
import { HiOutlineShoppingBag } from 'react-icons/hi';



function NavBar() {
  return (
    <div>
        <Container className='position-absolute my-nav' style={{"top":"40px","left":"50%","transform":"translate(-50%)"}}>
        <Navbar expand="lg" className='p-0 nav-bg'>
        <Navbar.Brand href="/">
          <img src={logo} alt='Logo' className='logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mx-auto navbar-links">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/shop">Shop</Nav.Link>
            {/* <NavDropdown title="Shop" id="shop-dropdown">
              <Container>
                <div className="d-flex">
                  <div className="col">
                    <NavDropdown.Item href="/category1">Category 1</NavDropdown.Item>
                    <NavDropdown.Item href="/category2">Category 2</NavDropdown.Item>
                    <NavDropdown.Item href="/category3">Category 3</NavDropdown.Item>
                  </div>
                  <div className="col">
                    <NavDropdown.Item href="/category4">Category 4</NavDropdown.Item>
                    <NavDropdown.Item href="/category5">Category 5</NavDropdown.Item>
                    <NavDropdown.Item href="/category6">Category 6</NavDropdown.Item>
                  </div>
                  <div className="col">
                    <NavDropdown.Item href="/category7">Category 7</NavDropdown.Item>
                    <NavDropdown.Item href="/category8">Category 8</NavDropdown.Item>
                    <NavDropdown.Item href="/category9">Category 9</NavDropdown.Item>
                  </div>
                </div>
              </Container>
            </NavDropdown> */}
            <Nav.Link href="/blogs">Blogs</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
          </Nav>
          <Nav className="justify-content-end">
          <NavDropdown title={<FaUserCircle />} id="icon-dropdown" as="ul" className='m-0 user-icon'>
              <NavDropdown.Item href="/register" as="li">
                Register
              </NavDropdown.Item>
              <NavDropdown.Item href="/login" as="li">
                Login
              </NavDropdown.Item>
              <NavDropdown.Item href="/shopping-cart" as="li">
                Shopping Cart
              </NavDropdown.Item>
              <NavDropdown.Item href="/checkout" as="li">
                Checkout
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/bag" className="shopping-bag-link">
              <HiOutlineShoppingBag />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
        </Container>
    </div>
  )
}
export default NavBar
