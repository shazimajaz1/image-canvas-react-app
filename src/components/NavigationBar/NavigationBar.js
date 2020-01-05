/*
    Copyright: Feel free to use this code in any project in any way as necessary.
    Developed By: Shazim Ajaz
    Date of Creation: Jan 5, 2020
 */

import React, {Component} from 'react'
import classes from './NavigationBar.css'
import Logo from "../Logo/Logo";

/*
    This is a navigation bar component. This component by default
    stays on top of the screen at all times. It uses 10% of the screen height
    by default. And it contains a logo by default.
 */
class NavigationBar extends Component {

    render() {
        return (
            <div className={classes.NavigationBarDesktop}>
                <Logo styling={classes.Logo}/>
            </div>
        )
    }
}

export default NavigationBar;