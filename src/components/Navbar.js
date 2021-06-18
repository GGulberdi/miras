import React from 'react'
import {Container, Breadcrumb, Nav} from 'react-bootstrap'

function Navbar() {
    return (
        <>
  <Nav className="justify-content-end navbar" bg='dark' activeKey="/">
    <Nav.Item>
      <Nav.Link href="/">HOME</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/about" eventKey="about">ABOUT</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/support" eventKey="support">SUPPORT US</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/events" eventKey="events">EVENTS</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/programms" eventKey="programms">PROGRAMS</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="contact" eventKey="contact" >CONTACT</Nav.Link>
    </Nav.Item>
  </Nav>
 </>
        
    )
}


export default Navbar;