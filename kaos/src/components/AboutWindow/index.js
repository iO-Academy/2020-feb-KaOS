import React from "react";
import Window from "../Desktop/WindowComponent";
import './AboutWindow.css'
import Mike from "../../Image/mikeeating.png"

export default class AboutWindow extends React.Component {
    render() {
        return (
            <Window close={this.props.close} name='About'>
                <div className='AboutContent'>
                    KaOS is a pretty cool browser based operation system,
                    written in React by Alex Jennings, Bradley Purdue, Vincent Pires and Samuel Crudge.
                    Inspired by Mike Oram's love for the Microsoft Windows operating system.
                    <img className='MikeImg' src={Mike}/>
                </div>
            </Window>
        )
    }
}

