import React from 'react'
import { useCurrentUser } from "../../context/CurrentUserContext";
import styles from "../../styles/ProfilePost.module.css";
import btnStyles from "../../styles/Button.module.css";
import SmallPost from '../../components/SmallPost';
import { Link } from 'react-router-dom';
import postStyles from "../../styles/Post.module.css";


const PostMini = (props) => {
    const { post, mobile, imageSize = 55 } = props;
    const { id, image, title, owner } = post;

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;

    return (
        <div
        className={`my-3 d-flex align-items-center ${mobile && "flex-column"}`}
        >
            <div>
            <Link className="align-self-center" to={`/posts/${id}`}>
                <SmallPost src={image} height={imageSize} className={styles.SmallPost}/>
            </Link>
            </div>
            <div className={`mx-2 ${styles.WordBreak}`}>
                <p>{title}</p>
            </div>
        </div>
    );
};

export default PostMini