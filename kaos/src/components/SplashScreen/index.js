import React from "react";



export default class SplashScreen extends React.Component {

    createDesktop = () => {
        document.documentElement.requestFullscreen();
        this.props.toggle();
    };

    render() {
        return (
            <button onClick={this.createDesktop}>Full Screen</button>
        );
    }
}