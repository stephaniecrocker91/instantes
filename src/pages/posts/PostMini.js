import React from 'react'
import { useCurrentUser } from "../../context/CurrentUserContext";
import styles from "../../styles/Profile.module.css";
import btnStyles from "../../styles/Button.module.css";
import Avatar from '../../components/Avatar';
import { Link } from 'react-router-dom';


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
                <Avatar src={image} height={imageSize} />
            </Link>
            </div>
            <div className={`mx-2 ${styles.WordBreak}`}>
                <p>{title}</p>
            </div>
        </div>
    );
};

export default PostMini