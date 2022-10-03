import React, { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
import Avatar from "./Avatar";
import { useCurrentUser, useSetCurrentUser } from "../context/CurrentUserContext";
import axios from "axios";

const NavBar = () => {
    
    const currentUser = useCurrentUser();
    const setCurrentUser = useSetCurrentUser();

    const [expanded, setExpanded] =useState(false)

    const handleSignOut = async () => {
        try {
            await axios.post("dj-rest-auth/logout/");
            setCurrentUser(null);
        } catch (err) {
            console.log(err);
        }
    };

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
                    <i className="fas fa-sign-out-alt" onClick={handleSignOut}></i>Sign out
                </NavLink>
                <NavLink
                    className={styles.NavLink}
                    to={`/profiles/${currentUser?.profile_id}`}
                >
                <Avatar src={currentUser?.profile_image} text="Profile" height={40} />
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
        <Navbar expanded={expanded} className={styles.NavBar} expand="md" fixed="top" variant="dark">
            <Container>
                <NavLink to="/">
                    <Navbar.Brand className={styles.Brand} href="#home">Instant<span className={styles.Icon}>es</span></Navbar.Brand>
                </NavLink>
                {currentUser && addPostIcon}
                <Navbar.Toggle 
                onclick={() => setExpanded(!expanded)}
                aria-controls="basic-navbar-nav"/>
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
