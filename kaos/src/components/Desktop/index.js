import React from 'react';
import TaskBar from "./Taskbar";
import './Desktop.css';
import Logo from "./Logo";
import Window from "./WindowComponent";

export default class Desktop extends React.Component {
    state = {
        applications:{
            about: false
        }
    };

    toggleApplication = (appName) => {
        this.setState({
            applications:{
                [appName]: !this.state.applications[appName]
            }
        })
    };

    render() {
        return (
            <div className="Desktop" >
                {this.state.applications.about && <Window close={this.toggleApplication} name='about' />}
                <div className='LogoContainer'>
                    <Logo />
                </div>
                {this.props.children}
                <TaskBar toggleApplication={this.toggleApplication}/>
            </div>
        ) ;
    }
}
