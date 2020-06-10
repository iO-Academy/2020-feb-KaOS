import React from "react";
// import logo from "../../../Image/LogoOrange.svg";
// import logo from "../../../Image/LogoGreen.svg";
// import logo from "../../../Image/LogoBlue.svg";
import logo from "../../../Image/LogoRed.svg";

export default class Logo extends React.Component {
    render() {
        return (
            <img src={logo} alt='Logo'/>
        );
    }
}