import React from 'react'
import default_image from '../../../assets/default-image.jpg'
import classes from './ImageScreen.css'

const imageScreen = () => {
    return (
        <div className={classes.ImageScreen}>
            <img src={default_image} alt="default_image"/>
        </div>

    )
}

export default imageScreen;