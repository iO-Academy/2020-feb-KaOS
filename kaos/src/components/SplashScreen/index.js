import React from 'react';
import './SplashScreen.css';



export default class SplashScreen extends React.Component {

    createDesktop = () => {
        document.documentElement.requestFullscreen();
        this.props.toggle();
    };

    render() {
        return (
            <div className='PowerButtonContainer'>
            <button className='PowerButton' onClick={this.createDesktop}>I/O</button>
            </div>
        );
    }
}
