import React, {Component} from 'react'
import logo_image from '../../assets/logo_image.png'

class Logo extends Component {

    render() {
        return (
            <img src={logo_image} alt="logo" className={this.props.styling}/>
        )
    }
}

export default Logo;