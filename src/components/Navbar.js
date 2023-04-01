import React, { useState, useEffect } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import logo from '../public/Assets/logo.png'
import Link from 'next/link'
import Image from 'next/image'

function NavBar() {
  const [expand, updateExpanded] = useState(false)
  const [navColour, updateNavbar] = useState(false)

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true)
    } else {
      updateNavbar(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler)
    return () => {
      window.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? 'sticky' : 'navbar'}
    >
      <Container>
        <Link href="/" className="navbar-brand d-flex">
          <Image src={logo} className="img-fluid logo" alt="brand" />
        </Link>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : 'expanded')
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Link
                href="/"
                className="nav-link"
                onClick={() => updateExpanded(false)}
              >
                Home
              </Link>
            </Nav.Item>

            <Nav.Item>
              <Link
                href="/about"
                className="nav-link"
                onClick={() => updateExpanded(false)}
              >
                Sobre
              </Link>
            </Nav.Item>

            <Nav.Item>
              <Link
                href="/project"
                className="nav-link"
                onClick={() => updateExpanded(false)}
              >
                Projetos
              </Link>
            </Nav.Item>

            <Nav.Item>
              <Link
                href="/contact"
                className="nav-link"
                onClick={() => updateExpanded(false)}
              >
                Contato
              </Link>
            </Nav.Item>

            <Nav.Item>
              <Link
                href="/resume"
                className="nav-link"
                onClick={() => updateExpanded(false)}
              >
                Currículo
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
