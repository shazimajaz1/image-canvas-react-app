import React, {Component} from 'react'
import classes from './HorizontalImageScroll.css'


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


        //Return the image array
        return (
            <div className={classes.HorizontalImageScroll}>
                {this.props.slider_images}
            </div>
        );
    }

}

export default HorizontalImageScroll;