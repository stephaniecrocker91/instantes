import React from 'react'
import styles from "../../styles/Profile.module.css";
import btnStyles from "../../styles/Button.module.css";

const Profile = (props) => {

    const { profile, mobile, imageSize = 55 } = props;
    const { id, following_id, image, owner } = profile;

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;

    return (
        <div>Profile</div>
    )
}

export default Profile