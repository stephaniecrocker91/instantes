import React, { useEffect, useRef, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import styles from "../../styles/PostCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import {Image} from "react-bootstrap"

import { useHistory, useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";

function PostEditForm() {

    const [errors, setErrors] = useState({});

    const [postData, setPostData] = useState({
        title:"",
        content:"",
        image:"",
    });

    const {title, content, image} = postData;

    const imageInput = useRef(null);
    const history = useHistory();
    const { id } = useParams();

    useEffect(() => {
        const handleMount = async () => {
        try {
            const { data } = await axiosReq.get(`/posts/${id}/`);
            const { title, content, image, is_owner } = data;

            is_owner ? setPostData({ title, content, image }) : history.push("/");
        } catch (err) {
            console.log(err);
        }
        };

        handleMount();
    }, [history, id]);

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

        const handleSubmit = async (event) => {
            event.preventDefault();
            const formData = new FormData();

        
            formData.append("title", title);
            formData.append("content", content);
            if (imageInput?.current?.files[0]) {
                formData.append("image", imageInput.current.files[0]);
                }
        
            try {
                await axiosReq.put(`/posts/${id}/`, formData);
                history.push(`/posts/${id}`);
                } catch (err) {
                console.log(err);
                    if (err.response?.status !== 401) {
                        setErrors(err.response?.data);
                    }
                }
            };

    const textFields = (
        <div className="text-center">
            <Form.Group controlId="title">
                <Form.Label
                className={appStyles.SubTitle}>Title</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="" 
                    name="title"
                    value={title}
                    onChange={handleChange} />
            </Form.Group>
            {errors.title?.map((message, idx) => (
                        <Alert key={idx} variant="warning" className="mt-3">
                            {message}
                        </Alert>
                    ))}

            <Form.Group controlId="content">
                <Form.Label
                className={appStyles.SubTitle}>Content</Form.Label>
                <Form.Control 
                    type="textarea" 
                    placeholder="" 
                    rows={7} name="content"
                    value={content}
                    className= {styles.halfContainer}
                    onChange={handleChange}  />
            </Form.Group> 
            {errors.content?.map((message, idx) => (
                        <Alert key={idx} variant="warning" className="mt-3">
                            {message}
                        </Alert>
                    ))}
        
            <Button
                className={`${btnStyles.Button} ${btnStyles.Orange}`}
                onClick={() => history.goBack()}
            >
                cancel
            </Button>
            <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
                save
            </Button>
            </div>
        );

    return (
        <Form onSubmit={handleSubmit}>
            <Row>
            <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
                    <Container className={appStyles.Content}>{textFields}</Container>
                </Col>
                <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
                    <Container
                        className={`${appStyles.Content} ${styles.Container} ${appStyles} d-flex flex-column justify-content-center`}
                    >
                    <Form.Group className="text-center">
                                <figure>
                                    <Image className={appStyles.Image} src={image} rounded />
                                </figure>
                                <div>
                                    <Form.Label
                                        className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                                        htmlFor="image-upload"
                                    >
                                        Change the image
                                    </Form.Label>
                                </div>       
                        <Form.File
                            id="image-upload"
                            accept="image/*"
                            onChange={handleChangeImage}
                            ref={imageInput}
                            className={appStyles.Hidden}
                                
                        />
                    </Form.Group>
                        {errors.image?.map((message, idx) => (
                        <Alert key={idx} variant="warning" className="mt-3">
                            {message}
                        </Alert>
                    ))}
                    <div className="d-md-none">{textFields}</div>
                    </Container>
                </Col>
            </Row>
        </Form>
    );
}

    export default PostEditForm;