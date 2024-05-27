import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

function Header() {
  return (
    <>
       <Navbar className="bg-primary">
        <Container>
          <Navbar.Brand href="#home">
          <i class="fa-solid fa-house"></i>{' '}
            Rentify
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header