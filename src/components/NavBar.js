import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
import Avatar from "./Avatar";
import { useCurrentUser, useSetCurrentUser } from "../context/CurrentUserContext";
import axios from "axios";
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";
import { removeTokenTimestamp } from "../utils/utils";
import { Col, Row } from "react-bootstrap";

const NavBar = () => {
    
    const currentUser = useCurrentUser();
    const setCurrentUser = useSetCurrentUser();

    const {expanded, setExpanded, ref} = useClickOutsideToggle();    

    const handleSignOut = async () => {
        try {
            await axios.post("dj-rest-auth/logout/");
            setCurrentUser(null);
            removeTokenTimestamp();
        } catch (err) {
            // console.log(err);
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
                    <span className={styles.NavLinkContent}>
                    <i className="fas fa-stream"></i>Feed
                    </span>
                </NavLink>

                <NavLink
                    className={styles.NavLink}
                    activeClassName={styles.Active}
                    to="/liked"
                >
                    <span className={styles.NavLinkContent}>
                    <i className="fas fa-heart"></i>Liked
                    </span>
                </NavLink>

                <NavLink
                    className={styles.NavLink}
                    activeClassName={styles.Active}
                    to="/bookmarked"
                >
                    <span className={styles.NavLinkContent}>
                    <i className="fas fa-bookmark"></i>Bookmarks
                    </span>
                </NavLink>

                <NavLink className={styles.NavLink} onClick={handleSignOut} to="/" >
                <span className={styles.NavLinkContent}>
                    <i className="fas fa-sign-out-alt"></i>Sign Out
                    </span>
                </NavLink>
                <NavLink
                    className={styles.NavLink}
                    to={`/profiles/${currentUser?.profile_id}`}
                >
                <Avatar src={currentUser?.profile_image} text="PROFILE" height={40} />
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
                    <span className={styles.NavLinkContent}>
                    <i className="fas fa-arrow-right"></i>Sign In
                    </span>
                </NavLink>
                <NavLink 
                to="/signup" 
                className={styles.NavLink} 
                activeClassName={styles.Active}
                >
                    <span className={styles.NavLinkContent}>
                    <i className="fas fa-feather"></i>Sign Up
                    </span>
                </NavLink>
            </>
        );

    return (
        <>
        <Navbar expanded={expanded} className={styles.NavBar} expand="md" fixed="top" variant="dark">
            <Container className="d-flex flex-column">
                <Row>
                    <Col>
                    <NavLink to="/">
                        <Navbar.Brand className={styles.Brand}>Instantes</Navbar.Brand>
                    </NavLink>
                    </Col>
                </Row>  
                <Row>
                    {currentUser && addPostIcon}
                    <Navbar.Toggle 
                    ref={ref}
                    onClick={() => setExpanded(!expanded)}
                    aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className={`${styles.NavIconBox} ml-auto text-center`}>
                            <NavLink 
                                exact
                                to="/" 
                                className={styles.NavLink} 
                                activeClassName={styles.Active}
                                >
                                <span className={styles.NavLinkContent}>
                                <i className="fas fa-home"></i>Home
                                </span>
                            </NavLink>
                            {currentUser ? loggedInIcons : loggedOutIcons}
                        </Nav>
                    </Navbar.Collapse>
                </Row>
            </Container>
        </Navbar>
        </>
    );
};
export default NavBar
