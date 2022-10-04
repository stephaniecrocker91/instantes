import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import Upload from "../../assets/upload.png";

import styles from "../../styles/PostCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import Asset from "../../components/Asset";

function PostCreateForm() {

    const [errors, setErrors] = useState({});

    const [postData, setPostData] = useState({
        title:"",
        content:"",
        image:"",
    });

    const {title, content, image} = postData;

    const handleChange = (event) => {
        setPostData({
            ...postData,
            [event.target.name]: event.target.value,
        });
    };

    const handleChangeImage = (event) => {
        if (event.target.files.length) {
            URL.revokeObjectURL(image);
            setPostData({
                ...postData,
                image: URL.createObjectURL(event.target.files[0]),
            });
            }
        };

    const textFields = (
        <div className="text-center">
            <Form.Group controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="" 
                    name="title"
                    value={title}
                    onChange={handleChange} />
            </Form.Group>

            <Form.Group controlId="content">
                <Form.Label>Content</Form.Label>
                <Form.Control 
                    type="textarea" 
                    placeholder="" 
                    rows={7} name="content"
                    value={content}
                    onChange={handleChange}  />
            </Form.Group> 
        
            <Button
                className={`${btnStyles.Button} ${btnStyles.Blue}`}
                onClick={() => {}}
            >
                cancel
            </Button>
            <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
                create
            </Button>
            </div>
        );

    return (
        <Form>
        <Row>
            <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
            <Container
                className={`${appStyles.Content} ${styles.Container} ${appStyles.Boxed} d-flex flex-column justify-content-center`}
            >
                <Form.Group className="text-center">
                
                    <Form.Label
                    className="d-flex justify-content-center"
                    htmlFor="image-upload"
                    >
                    <Asset src={Upload} message="Click or tap here to upload your image!" />
                    </Form.Label>
                    <Form.File
                        id="image-upload"
                        accept="image/*"
                        onChange={handleChangeImage}
                    />
                </Form.Group>
                <div className="d-md-none">{textFields}</div>
            </Container>
            </Col>
            <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
            <Container className={appStyles.Content}>{textFields}</Container>
            </Col>
        </Row>
        </Form>
    );
    }

    export default PostCreateForm;