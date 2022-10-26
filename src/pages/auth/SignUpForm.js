import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

import { Form, Button, Image, Col, Row, Container, Alert } from "react-bootstrap";

import axios from "axios";
import { useRedirect } from "../../hooks/useRedirect";
import Asset from "../../components/Asset";
import SignUp from "../../assets/sign-up.png";

const SignUpForm = () => {
  useRedirect("loggedIn");
  const [signUpData, setSignUpData] = useState({
      username: "",
      password1: "",
      password2: "",
    });
    const { username, password1, password2 } = signUpData;
    
    const [errors, setErrors] = useState({});
    
    const history = useHistory();

    const handleChange = (event) => {
      setSignUpData({
        ...signUpData,
        [event.target.name]: event.target.value,
      });
    };

    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        await axios.post("/dj-rest-auth/registration/", signUpData);
        history.push("/signin");
      } catch (err) {
        setErrors(err.response?.data);
      }
  };

  return (
    
    <Row className={styles.Row}>
      <Col className="py-2 p-md-2" md={6}>
        <Container className={`${appStyles.Content} ${styles.Form} p-4 `}>
          <h1 className={appStyles.Header}>Sign up</h1>
          
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="username">
              <Form.Label className="d-none">Username</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="username" 
                name="username" 
                className={styles.Input}
                value={username} 
                onChange={handleChange} />
            </Form.Group>
            {errors.username?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}


            <Form.Group controlId="password1">
              <Form.Label className="d-none">Password</Form.Label>
              <Form.Control 
                type="password" 
                placeholder="password" 
                name="password1" 
                className={styles.Input}
                value={password1}
                onChange={handleChange} />
            </Form.Group>

            {errors.password1?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}

            <Form.Group controlId="password2">
              <Form.Label className="d-none">Password</Form.Label>
              <Form.Control 
                type="password" 
                placeholder="confirm password" 
                name="password2" 
                className={styles.Input} 
                value={password2}
                onChange={handleChange} />
            </Form.Group>

            {errors.password2?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            <Button className={`${btnStyles.Button} ${btnStyles.Wide}`} type="submit">
            Sign Up
            </Button>
            {errors.non_field_errors?.map((message, idx) => (
              <Alert key={idx} variant="warning" className="mt-3">
                {message}
              </Alert>
            ))}
          </Form>
        </Container>
        <Container className={`mt-3 ${appStyles.Content}`}>
          <Link className={styles.Link} to="/signin">
            Already have an account? <span>Sign in here!</span>
          </Link>
        </Container>
      </Col>
      <Col
        md={6}
        className={`my-auto d-none d-md-block p-2`}
      >

        <Image
          className={`${appStyles.FillerImage}`}
          src={
            SignUp
          }
        />
      </Col>
    </Row>
  );
};

export default SignUpForm;