import React from 'react';
import TaskBar from "./Taskbar";
import './Desktop.css';
import Logo from "./Logo";
import AboutWindow from "../AboutWindow"
import GifWindow from "../GifWindow"
import MusicWindow from "../MusicWindow";

export default class Desktop extends React.Component {
    state = {
        activeApplication: '',
        applications:{
            About: false,
            Gif: false,
            Music: false
        }
    };

    setActive = (appName) => {
        console.log(appName);
        this.setState({
            activeApplication: appName
        });

    };

    toggleApplication = (appName) => {
        this.setState({
            applications:{
                ...this.state.applications,
                [appName]: !this.state.applications[appName]
            }
        });
    };

    render() {
        return (
            <div>
                <div className="AboutWindow">
                    <div className='LogoContainer'>
                        <Logo/>
                    </div>
                    {this.state.applications.Gif && <GifWindow setActive={this.setActive}
                                                               active={this.state.activeApplication}
                                                               close={this.toggleApplication}/>}
                    {this.state.applications.About && <AboutWindow setActive={this.setActive}
                                                                   active={this.state.activeApplication}
                                                                   close={this.toggleApplication}/>}
                    {this.state.applications.Music && <MusicWindow setActive={this.setActive}
                                                                   active={this.state.activeApplication}
                                                                   close={this.toggleApplication}/>}
                    <TaskBar setActive={this.setActive} toggleApplication={this.toggleApplication}/>
                </div>
            </div>
        ) ;
    }
}
