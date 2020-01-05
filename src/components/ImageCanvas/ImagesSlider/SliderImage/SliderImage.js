import React, {Component} from 'react'
import classes from './SliderImage.css'

/*
A slider image does maintains its own state to know if it
it is selected or not.

the default state is selected.
 */
class SliderImage extends Component {


    //Perform a conditional rendeing based on if the component is selected not.
    render() {

        const notBordered = (<img onClick={this.props.click}
                                  className={classes.SliderImage}
                                  src={this.props.image_source} alt="slider_icon"/>);

        const bordered = (<img
            style={{
                border: "thick lightblue solid",
                shadow: "none"
            }}
            onClick={this.props.click}
            className={classes.SliderImage}
            src={this.props.image_source} alt="slider_icon"/>);


        return (this.props.selected ? bordered : notBordered);

    }


}

export default SliderImage;