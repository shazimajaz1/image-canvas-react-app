import React, {Component} from 'react'
import classes from './HorizontalImageScroll.css'
import SliderImage from "../SliderImage/SliderImage";


/*
    This function allows us to important multiple images
 */
function importAll(r) {
    return r.keys().map(r);

}

const images = importAll(require.context('./../../../../random_images/', false, /\.(png|jpe?g|svg)$/));


/*
    HorizontalImageScroll is a component that keeps images inside and
    allows them to be scrolled horizontally. The main purpose of this component
    is to provide the styling.
 */
class HorizontalImageScroll extends Component {

    /*
        This method transforms the given images array into an array of block
     */
    render() {

        //Transform the images array into a Slider Image array
        const images_to_render = images.map(imageSource => {
            return (
                <SliderImage image_source={imageSource} key={imageSource}/>
            )
        })


        //Return the image array
        return (
            <div className={classes.HorizontalImageScroll}>
                {images_to_render}
            </div>
        );
    }

}

export default HorizontalImageScroll;