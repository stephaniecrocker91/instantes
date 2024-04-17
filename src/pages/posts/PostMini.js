import React from 'react'
import { useCurrentUser } from "../../context/CurrentUserContext";
import styles from "../../styles/ProfilePost.module.css";
import SmallPost from '../../components/SmallPost';
import { Link } from 'react-router-dom';
import postStyles from "../../styles/Post.module.css";
import { axiosRes } from "../../api/axiosDefaults";



const PostMini = (props) => {
    const { post, mobile, imageSize = 55, setPosts } = props;
    const { id, image, owner, like_id, likes_count } = post;

    const currentUser = useCurrentUser();


    const handleLike = async () => {
        try {
            const { data } = await axiosRes.post("/likes/", { post: id });
            setPosts((prevPosts) => ({
                ...prevPosts,
                results: prevPosts.results.map((post) => {
                return post.id === id
                    ? { ...post, likes_count: post.likes_count + 1, like_id: data.id }
                    : post;
                }),
            }));
            } catch (err) {
            // console.log(err);
            }
        };

    const handleUnlike = async () => {
        try {
            await axiosRes.delete(`/likes/${like_id}/`);
            setPosts((prevPosts) => ({
                ...prevPosts,
                results: prevPosts.results.map((post) => {
                return post.id === id
                    ? { ...post, likes_count: post.likes_count - 1, like_id: null }
                    : post;
                }),
            }));
            } catch (err) {
            // console.log(err);
            }
        };

    return (
        <div
        className={`my-3 d-flex align-items-center ${mobile && "flex-column"}`}
        >
            <div>
            <Link className="align-self-center" to={`/posts/${id}`}>
                <SmallPost src={image} height={imageSize} className={styles.SmallPost}/>
            </Link>
            </div>
            <div className={`mx-2 ${styles.WordBreak} ${styles.Condense}`}>
                {/* <p><em>{title}</em></p> */}
                <p><em>By: </em><span><strong>{owner}</strong></span></p> 
            </div>
            <div className={`text-right ${!mobile && "ml-auto"}`}>
                {!mobile &&
                currentUser &&
                // !is_owner && 
                (like_id ? (
                    <>
                    <span onClick={handleUnlike}>
                        <i className={`fas fa-heart ${postStyles.Red}`} />
                    </span>
                    <span className={styles.Icon}>
                            {likes_count}
                    </span>
                    </>
                ) : (
                    <>
                    <span onClick={handleLike}>
                        <i className={`far fa-heart ${postStyles.IconOutline}`} />
                    </span>
                    <span className={styles.Icon}>
                        {likes_count}
                    </span>
                    </>
                )
                )}
            </div>
        </div>
    
    );
    };

export default PostMini
