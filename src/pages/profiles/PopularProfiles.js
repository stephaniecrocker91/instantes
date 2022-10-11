import React from "react";
import { Container } from 'react-bootstrap'
import Asset from "../../components/Asset";
import appStyles from '../../App.module.css'
import Profile from "./Profile";
import { useProfileData } from "../../context/ProfileDataContext";


const PopularProfiles = ({ mobile }) => {
    const { popularProfiles } = useProfileData();
    
    return (
        <Container
        className={`${appStyles.Content} ${appStyles.Boxed} ${
            mobile && "d-lg-none text-center mb-3"
            }`}
        >
            {popularProfiles.results.length ? (
                <>
                    <p>Most followed profiles.</p>
                    {mobile ? (
                        <div className="d-flex justify-content-around">
                        {popularProfiles.results.slice(0, 4).map((profile) => (
                            <Profile key={profile.id} profile={profile} mobile />
                        ))}
                        </div>
                    ) : (
                        popularProfiles.results.map((profile) => (
                            <Profile key={profile.id} profile={profile} />
                        ))
                    )}
                    </>
                ) : (
                    <Asset spinner />
                )}
        </Container>
    );
};

export default PopularProfiles