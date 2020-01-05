import React, {Component} from 'react'
import classes from './ImageCanvas.css'
import ImageScreen from './ImageScreen/ImageScreen'
import ImagesSlider from "./ImagesSlider/ImagesSlider";
import SliderImage from "./ImagesSlider/SliderImage/SliderImage";


/*
    This component is the container for ImageScreen and ImageSlider components.
    The purpose of this component is provide styling

    This component handles state to keep track of the current image that is being displayed on the screen.
 */

/*
    This function allows us to important multiple images
 */
function importAll(r) {
    return r.keys().map(r);

}

const images = importAll(require.context('./../../random_images/', false, /\.(png|jpe?g|svg)$/));


class ImageCanvas extends Component {


    //Define the state
    //State keeps track of which image is currently selected.
    state = {
        currentImageSelected: images[0]
    };


    sliderImageClickHandler = (name) => {
        //Change the image in ImageScreen based on the selected sliderImage
        this.setState({
            currentImageSelected: name
        })

    };

    render() {

        //Transform the images array into a Slider Image array
        const images_to_render = images.map(imageSource => {
            //If the slider image is currently selected, create a border on it.
            let image_selected = false;
            if (imageSource === this.state.currentImageSelected) {
                image_selected = true;
            }
            return (
                <SliderImage click={() => this.sliderImageClickHandler(imageSource)}
                             image_source={imageSource} key={imageSource}
                             selected={image_selected}/>
            )
        });

        return (
            <div className={classes.ImageCanvas}>
                <ImageScreen image_source={this.state.currentImageSelected}/>
                <ImagesSlider slider_images={images_to_render}/>

            </div>

        );
    }
}

export default ImageCanvas