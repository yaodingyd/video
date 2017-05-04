import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { Link } from 'react-router'
import Logo from '../logo'

function Header ({channelTitle, handleLogout}) {
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
        { channelTitle && (
          <Nav pullRight>
            <NavItem eventKey={1}>{channelTitle}</NavItem>
            <NavItem eventKey={2} onClick={handleLogout}>Log Out</NavItem>
          </Nav>
        )}
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
