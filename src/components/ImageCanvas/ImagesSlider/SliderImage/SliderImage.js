import React from 'react'
import classes from './SliderImage.css'

const sliderImage = (props) => {
    return (<img className={classes.SliderImage} src={props.image_source} alt="slider_icon"/>);

}

export default sliderImage;