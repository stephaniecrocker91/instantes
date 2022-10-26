import React, { useState } from "react";
import axios from "axios";

import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

import { Link, useHistory } from "react-router-dom";

import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
import { useSetCurrentUser } from "../../context/CurrentUserContext";
import { useRedirect } from "../../hooks/useRedirect";
import { setTokenTimestamp } from "../../utils/utils";
import SignIn from "../../assets/sign-in.png";

function SignInForm() { 

    const setCurrentUser = useSetCurrentUser();
    useRedirect("loggedIn");

    const [signInData, setSignInData] = useState({
        username: "",
        password: "",
    });
    const { username, password } = signInData;

    const [errors, setErrors] = useState({});

    const history = useHistory();

    const handleChange = (event) => {
        setSignInData({
            ...signInData,
            [event.target.name]: event.target.value,
            });
        };
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await axios.post("/dj-rest-auth/login/", signInData);
            setCurrentUser(data.user)
            setTokenTimestamp(data);
            history.goBack();
        } catch (err) {
            setErrors(err.response?.data);
        }
    };
return (
    <Row>
        <Col className={`my-auto p-0 p-md-2`} md={6}>
            <Container className={`${appStyles.Content} ${styles.Form} p-4 `}>
                <h1 className={appStyles.Header}>Sign in</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="username">
                        <Form.Label className="d-none">Username</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="username"
                            className={styles.Input}
                            name="username"
                            value={username} 
                            onChange={handleChange} />
                    </Form.Group>
                    {errors.username?.map((message, idx) => (
                        <Alert variant="warning" key={idx}>
                            {message}
                        </Alert>
                    ))}
                    <Form.Group controlId="password">
                        <Form.Label className="d-none">Password</Form.Label>
                        <Form.Control 
                            type="password" 
                            placeholder="password"
                            className={styles.Input} 
                            name="password"
                            value={password} 
                            onChange={handleChange} />
                    </Form.Group>
                    {errors.password?.map((message, idx) => (
                        <Alert variant="warning" key={idx}>
                            {message}
                        </Alert>
                    ))}
                    <Button type="submit" className={`${btnStyles.Button} ${btnStyles.Wide}`}>
                        Sign In
                    </Button>
                    {errors.non_field_errors?.map((message, idx) => (
                        <Alert key={idx} variant="warning" className="mt-3">
                            {message}
                        </Alert>
                    ))}
                </Form>

            </Container>
            <Container className={`mt-3 ${appStyles.Content}`}>
                <Link className={styles.Link} to="/signup">
                Don't have an account? <span>Sign up now!</span>
                </Link>
            </Container>
        </Col>
        <Col
        md={6}
        className={`my-auto d-none d-md-block p-2 ${styles.SignInCol}`}
        >
            <Image
            className={`${appStyles.FillerImage}`}
            src={SignIn}
            />
        </Col>
    </Row>
    );
}

export default SignInForm;