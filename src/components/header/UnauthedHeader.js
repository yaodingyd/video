import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router'
import Logo from '../logo'

function UnauthedHeader () {
  return (
    <Navbar inverse>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to={'/'}>
            <Logo />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <LinkContainer to={'/login'}>
            <NavItem eventKey={1}>Log In</NavItem>
          </LinkContainer>
          <LinkContainer to={'/signup'}>
            <NavItem eventKey={2}>Sign Up</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default UnauthedHeader
