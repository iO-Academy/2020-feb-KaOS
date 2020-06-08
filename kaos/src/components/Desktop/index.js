import React from 'react';
import TaskBar from "./Taskbar";
import './Desktop.css';
import Logo from "./Logo";
import AboutWindow from "../AboutWindow"


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
            <div className="AboutWindow">
                <div className='LogoContainer'>
                <Logo />
            </div>
                {this.state.applications.about && <AboutWindow close={this.toggleApplication}/>}
                {this.props.children}
                <TaskBar toggleApplication={this.toggleApplication}/>
            </div>
        ) ;
    }
}

