import React from 'react';
import classes from './App.css';
import NavigationBar from "./components/NavigationBar/NavigationBar";
import ImageCanvas from "./components/ImageCanvas/ImageCanvas";

function App() {
    return (
        <div className={classes.App}>
            {/*This will be replaced with actual title/navigation bar*/}
            <NavigationBar/>

            {/*This will be replaced by the actual image canvas*/}
            <ImageCanvas/>
        </div>

    );
}

export default App;
