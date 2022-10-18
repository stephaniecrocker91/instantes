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
                    to="/bookmarked"
                >
                    <i className="fas fa-bookmark"></i>Favourite
                </NavLink>

                <NavLink className={styles.NavLink} onClick={handleSignOut} to="/" >
                    <i className="fas fa-sign-out-alt"></i>Sign Out
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
        <>
        {/* <Container>
                    <Row>
                        <Col>
                        <NavLink to="/">
                            <Navbar.Brand className={styles.Brand}>Instantes</Navbar.Brand>
                        </NavLink>
                        </Col>
                    </Row>  
                </Container> */}


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
                        <Nav className="ml-auto text-center">
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
                </Row>
            </Container>
        </Navbar>
        </>
    );
};
export default NavBar
