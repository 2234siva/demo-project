import React from 'react'

//import {Link,BrowserRouter} from 'react-router-dom'

import {Navbar,Nav,NavDropdown,FormControl,Form,Button} from 'react-bootstrap';

function navbar() {
    return (
        <div>
          <header>
           <Navbar bg="success" variant="dark" expand="lg">
           <img alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJDITN2ddcwj-AEhAJivKHOse9OzRLyTRCzQ&usqp=CAU" width="100px" height="80px"/>
  <Navbar.Brand href="/Home"><h2>The Solued Store</h2></Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <Nav.Link href="/home">{<h3>Men</h3>} </Nav.Link>
      <Nav.Link href="/services">{<h3>Women</h3>}</Nav.Link>
      <Nav.Link href="/Fashion">{<h3>Brands</h3>}</Nav.Link>
      <Nav.Link href="/lifecycle">{<h3>lifecycle</h3>}</Nav.Link>
      <Nav.Link href="/Signup">{<h3>Signup</h3>}</Nav.Link>
        <NavDropdown title= {<h3>More</h3>} id="navbarScrollingDropdown">
        <NavDropdown.Item href="/About">Toys</NavDropdown.Item>
        <NavDropdown.Item href="/ReactReduxConnection">ReactRedux</NavDropdown.Item>
        <navdropdownDivider/>
        <NavDropdown.Item href="/Hooks1">Hooks</NavDropdown.Item>
        <navdropdownDivider/>
        <NavDropdown.Item href="/HooksApi">HooksApi</NavDropdown.Item>
        <navdropdownDivider/>


        <NavDropdown.Item href="/restapi">restapi</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="https://www.thesouledstore.com/?__cf_chl_captcha_tk__=pmd_P28ZhVXK.dOdFeyj.eTeQDMNwpIGMhsMo5K94YDr4BA-1633509848-0-gqNtZGzNArujcnBszQq9">
        <h3 variant="outline-Danger">Ipl Sale</h3>
      </Nav.Link>
    </Nav>
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      />
      <Button variant="outline-Danger">Search</Button>
    </Form>
    
  </Navbar.Collapse>
</Navbar>
</header>
        </div>
    )
}




export default navbar

