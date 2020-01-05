import React, {Component} from 'react'
import classes from './ImageCanvas.css'
import ImageScreen from './ImageScreen/ImageScreen'
import ImagesSlider from "./ImagesSlider/ImagesSlider";

class ImageCanvas extends Component {
    render() {
        return (
            <div className={classes.ImageCanvas}>
                <ImageScreen/>
                <ImagesSlider/>
            </div>

        );
    }
}

export default ImageCanvas