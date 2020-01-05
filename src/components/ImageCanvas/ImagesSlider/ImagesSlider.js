import React, {Component} from 'react'
import classes from './ImagesSlider.css'
import HorizontalImageScroll from "./HorizontalImageScroll/HorizontalImageScroll";

class ImagesSlider extends Component {
    render() {
        return (
            <div className={classes.ImageSlider}>
                <HorizontalImageScroll slider_images={this.props.slider_images}/>
            </div>
        )
    }
}

export default ImagesSlider;