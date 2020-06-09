import React from 'react';
import TaskBar from "./Taskbar";
import './Desktop.css';
import Logo from "./Logo";
import AboutWindow from "../AboutWindow"
import GifWindow from "../GifWindow"

export default class Desktop extends React.Component {
    state = {
        applications:{
            About: false,
            Gif: false,
            Music: false
        }
    };

    toggleApplication = (appName) => {
        this.setState({
            applications:{
                ...this.state.applications,
                [appName]: !this.state.applications[appName]
            }
        })
    };

    render() {
        return (
            <div>
                <div className="AboutWindow">
                    <div className='LogoContainer'>
                        <Logo/>
                    </div>
                    {this.state.applications.Gif && <GifWindow close={this.toggleApplication}/>}
                    {this.state.applications.About && <AboutWindow  close={this.toggleApplication}/>}
                    <TaskBar toggleApplication={this.toggleApplication}/>
                </div>
            </div>
        ) ;
    }
}
