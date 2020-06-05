import React from "react";
import ReactDOM from "react-dom";
import Desktop from "./components/Desktop";
import SplashScreen from "./components/SplashScreen";

class App extends React.Component {
    state = {
        splash_screen: true
    };

    toggleSplashScreen = () => {
        this.setState({splash_screen: !this.state.splash_screen});
    };

    render() {
        return (
            <>
                {this.state.splash_screen && <SplashScreen toggle={this.toggleSplashScreen}/>}
                {!this.state.splash_screen && <Desktop/>}
            </>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector("#app"));
