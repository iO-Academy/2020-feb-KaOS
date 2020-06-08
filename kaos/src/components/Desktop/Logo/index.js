import React from "react";
import logo from "../../../Image/Logo.svg"

export default class Logo extends React.Component {
    render() {
        return (
            <img src={logo} alt='Logo'/>
        );
    }
}