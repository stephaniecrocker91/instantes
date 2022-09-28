import React from 'react'
import { Navbar, Container, Nav } from "react-bootstrap";
import styles from "../styles/NavBar.module.css";

const NavBar = () => {
    return (
        <Navbar className={styles.NavBar} bg="light" expand="md" fixed="top">
            <Container>
                <Navbar.Brand className={styles.Brand} href="#home">Instantes</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
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
