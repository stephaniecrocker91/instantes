import React, { useContext } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
import { CurrentUserContext } from "../App";


const NavBar = () => {
    
    const currentUser = useContext(CurrentUserContext);
    const loggedInIcons = <><div className={styles.NavLink}  >{currentUser?.username}</div></>
    const loggedOutIcons = (
        <>
            <NavLink 
            to="/signin" 
            className={styles.NavLink} 
            activeClassName={styles.Active}
            >
                <i className="fas fa-arrow-right"></i>Sign In
            </NavLink>
            <NavLink 
            to="/signup" 
            className={styles.NavLink} 
            activeClassName={styles.Active}
            >
                <i className="fas fa-feather"></i>Sign Up
            </NavLink>
        </>
    )

    return (
        <Navbar className={styles.NavBar} expand="md" fixed="top" variant="dark">
            <Container>
                <NavLink to="/">
                    <Navbar.Brand className={styles.Brand} href="#home">Instant<span className={styles.Icon}>es</span></Navbar.Brand>
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <NavLink 
                            exact
                            to="/" 
                            className={styles.NavLink} 
                            activeClassName={styles.Active}
                            >
                            <i className="fas fa-home"></i>Home
                        </NavLink>
                        {currentUser ? loggedInIcons : loggedOutIcons}
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
export default NavBar
