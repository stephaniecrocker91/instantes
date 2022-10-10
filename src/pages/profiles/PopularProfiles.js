import React from 'react'
import { Container } from 'react-bootstrap'
import appStyles from '../../App.module.css'

const PopularProfiles = () => {
    const [profileData, setProfileData] = useState({
        // we will use the pageProfile later!
        pageProfile: { results: [] },
        popularProfiles: { results: [] },
    });
    const { popularProfiles } = profileData;
    const currentUser = useCurrentUser();
    
    return (
        <Container className={`${appStyles.Content} ${appStyles.Boxed}`}>
            <p>Most followed profiles.</p>
        </Container>
    )
}

export default PopularProfiles