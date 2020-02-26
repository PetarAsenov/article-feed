import React, {useState} from 'react'
import Logo from './logo.png'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import Search from './search'



export default function Header() {
  return (
    <div>
    <Navbar bg="light" expand='lg'>
  <Navbar.Brand href='#home'>
    <img src={Logo} alt="logo" width="150px"/>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls='basic-navbar-nav' />
  <Navbar.Collapse id='basic-navbar-nav'>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Articles</Nav.Link>
      <Nav.Link href="#link">Videos</Nav.Link>
      <Nav.Link href="#link">Almanac</Nav.Link>
      <Nav.Link href="#link">Snipets</Nav.Link>
      <Nav.Link href="#link">Newsletter</Nav.Link>
      <Nav.Link href="#link">Guides</Nav.Link>
      <NavDropdown title="Follow us" id="basic-nav-dropdown">
        <NavDropdown.Item href="https://www.facebook.com/CSSTricks/">Facebook</NavDropdown.Item>
        <NavDropdown.Item href="https://twitter.com/css">Twitter</NavDropdown.Item>
        <NavDropdown.Item href="https://www.instagram.com/real_css_tricks/">Instagram</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="https://www.youtube.com/user/realcsstricks">YouTube</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text "placeholder="Search" className="mr-sm-2"/>
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
</div>
  )
}