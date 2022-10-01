import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
import { useCurrentUser } from "../context/CurrentUserContext";


const NavBar = () => {
    
    const currentUser = useCurrentUser();

    const addPostIcon = (
        <NavLink
            className={styles.NavLink}
            activeClassName={styles.Active}
            to="/posts/create"
            >
            <i className="far fa-plus-square"></i>Add post
            </NavLink>
        );

        const loggedInIcons = (
            <>
                <NavLink
                    className={styles.NavLink}
                    activeClassName={styles.Active}
                    to="/feed"
                >
                    <i className="fas fa-stream"></i>Feed
                </NavLink>

                <NavLink
                    className={styles.NavLink}
                    activeClassName={styles.Active}
                    to="/liked"
                >
                    <i className="fas fa-heart"></i>Liked
                </NavLink>

                <NavLink
                    className={styles.NavLink}
                    activeClassName={styles.Active}
                    to="/liked"
                >
                    <i className="fas fa-bookmark"></i>Favourite
                </NavLink>

                <NavLink className={styles.NavLink} to="/" >
                    <i className="fas fa-sign-out-alt"></i>Sign out
                </NavLink>
                <NavLink
                    className={styles.NavLink}
                    to={`/profiles/${currentUser?.profile_id}`}
                >
                    
                </NavLink>
                </>
            );
    
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
                {currentUser && addPostIcon}
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
