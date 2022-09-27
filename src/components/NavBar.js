import React from 'react'
import { Navbar, Container, Nav } from "react-bootstrap";

const NavBar = () => {
    return (
        <Navbar bg="light" expand="md" fixed="top">
            <Container>
                <Navbar.Brand href="#home">Instantes</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link><i className="fas fa-home"></i>Home</Nav.Link>
                        <Nav.Link><i className="fas fa-arrow-right"></i>Sign In</Nav.Link>
                        <Nav.Link><i className="fas fa-feather"></i>Sign Up</Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar
