import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import { axiosReq } from '../../api/axiosDefaults';
import appStyles from "../../App.module.css";
import Post from './Post';
import { useCurrentUser } from '../../context/CurrentUserContext';

const PopularPosts = () => {
    const[postData, setPostData] = useState({
        pagePost: {results:[] },
        popularPosts: { results: [] },
    });
    const { popularPosts } = postData;
    const currentUser = useCurrentUser()

    useEffect(() => {
        const handleMount = async () => {
            try {
                const { data } = await axiosReq.get(
                    "/posts/?ordering=-likes_count"
                );
                setPostData((prevState) => ({
                    ...prevState,
                    popularPosts: data,
                }));
            } catch (err) {
                console.log(err)
            }
        }
        handleMount()
    }, [currentUser]);

    return (
        <Container className={appStyles.Content}>
            <p>Most liked posts</p>
            {popularPosts.results.map((post) => (
                <p key={post.id}>{post.title}</p>
            ))}
        </Container>
    )
}

export default PopularPosts