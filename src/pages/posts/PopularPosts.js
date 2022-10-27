import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import { axiosReq } from '../../api/axiosDefaults';
import appStyles from "../../App.module.css";
import Post from './Post';
import { useCurrentUser } from '../../context/CurrentUserContext';
import Asset from '../../components/Asset';
import PostMini from './PostMini';

const PopularPosts = ({ mobile }) => {
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
        <Container className={`${appStyles.Content} ${
            mobile && "d-lg-none text-center mb-3"
            }`}
        >
            {popularPosts.results.length ? (
                <>
                    <p>Most liked posts</p>
                        {mobile ? (
                            <div className="d-flex justify-content-around">
                            {popularPosts.results.slice(0,3).map((post) => (
                                // <p key={post.id}>{post.title}</p>
                                <PostMini key={post.id} post={post} mobile />
                        ))}
                        </div>
                        ):(
                            popularPosts.results.map((post) => (
                                // <p key={post.id}>{post.title}</p>
                                <PostMini key={post.id} post={post} />
                        ))
                    )}
                </>
            ) : (
                <Asset spinner />
            )}
        </Container>
    );
};

export default PopularPosts