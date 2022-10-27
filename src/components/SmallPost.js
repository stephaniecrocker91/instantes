import React from "react";
import styles from "../styles/SmallPost.module.css";

const SmallPost = (props) => {
    const { src, height = 45, text } = props;
    return (
        <span>
        <img
            className={styles.SmallPost}
            src={src}
            height={height}
            width={height}
            alt="small post"
        />
        {text}
        </span>
    );
};

export default SmallPost;