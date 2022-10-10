import React, { useEffect, useState } from "react";
import { Container } from 'react-bootstrap'
import { axiosReq } from "../../api/axiosDefaults";
import { useCurrentUser } from "../../context/CurrentUserContext";
import appStyles from '../../App.module.css'

const PopularProfiles = () => {
    const [profileData, setProfileData] = useState({
        // we will use the pageProfile later!
        pageProfile: { results: [] },
        popularProfiles: { results: [] },
    });
    const { popularProfiles } = profileData;
    const currentUser = useCurrentUser();

    useEffect(() => {
        const handleMount = async () => {
            try {
                const { data } = await axiosReq.get(
                "/profiles/?ordering=-followers_count"
                );
                setProfileData((prevState) => ({
                ...prevState,
                popularProfiles: data,
                }));
            } catch (err) {
                console.log(err);
            }
            };
        
            handleMount();
        }, [currentUser]);
    
    return (
        <Container className={`${appStyles.Content} ${appStyles.Boxed}`}>
            <p>Top rated profiles.</p>
            {popularProfiles.results.map((profile) => (
            <p key={profile.id}>{profile.owner}</p>
            ))}
        </Container>
    )
}

export default PopularProfiles