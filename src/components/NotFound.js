import React from 'react'
import NoResults from "../assets/no-results.png";
import styles from "../styles/NotFound.module.css";
import Asset from "./Asset";

const NotFound = () => {
    return (
        <div className='Margin'>
            <Asset
            src={NoResults}
            message="Oops, the page you are lookikng for does not exist..."
            />
        </div>
    )
}

export default NotFound