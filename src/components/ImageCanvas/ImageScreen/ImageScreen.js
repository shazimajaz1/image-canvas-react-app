import React from 'react'
import classes from './ImageScreen.css'

const imageScreen = (props) => {
    return (
        <div className={classes.ImageScreen}>
            <img src={props.image_source} alt="default_image"/>
        </div>

    )
}

export default imageScreen;