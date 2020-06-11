import React from 'react';
import TaskBar from './Taskbar';
import './Desktop.css';
import Logo from './Logo';
import AboutWindow from '../AboutWindow';
import GifWindow from '../GifWindow';
import MusicWindow from '../MusicWindow';
import ThemeWindow from '../ThemeWindow';
import TaskWindow from '../TaskWindow';
import Hotkeys from 'react-hot-keys';

import '../../Themes/Orange.css';
import '../../Themes/Green.css';
import '../../Themes/Blue.css';
import '../../Themes/Red.css';

export default class Desktop extends React.Component {
    state = {
        theme: 'Orange',
        activeApplication: '',
        applications: {
            About: false,
            Gif: false,
            Music: false,
            Theme: false,
            Task: false
        }
    };

    setActive = (appName) => {
        this.setState({
            activeApplication: appName
        });
    };

    toggleApplication = (appName) => {
        this.setState({
            applications: {
                ...this.state.applications,
                [appName]: !this.state.applications[appName]
            }
        });
    };

    setTheme = (theme) => {
        this.setState({
            theme: theme
        });
    };

    onKeyDown = () => {
        const currentActive = Object.keys(this.state.applications).filter(app => this.state.applications[app]);
        for (let i = 0; i < currentActive.length; i++) {
            if (i === (currentActive.length) - 1) {
                this.setActive(currentActive[0]);
            } else if (currentActive[i] === this.state.activeApplication) {
                this.setActive(currentActive[i + 1]);
                break;
            }
        }
    };

    render() {
        return (
            <Hotkeys
                keyName='shift+q'
                onKeyDown={this.onKeyDown.bind(this)}
            >
            <div className={this.state.theme}>
                <div className="AboutWindow">
                    <div className='LogoContainer'>
                        <Logo theme={this.state.theme}/>
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
                    {this.state.applications.Theme && <ThemeWindow setTheme={this.setTheme}
                                                                   setActive={this.setActive}
                                                                   active={this.state.activeApplication}
                                                                   close={this.toggleApplication}/>}
                    {this.state.applications.Task && <TaskWindow toggleApplication={this.toggleApplication}
                                                                 applications={this.state.applications}
                                                                 setActive={this.setActive}
                                                                 active={this.state.activeApplication}
                                                                 close={this.toggleApplication}/>}
                    <TaskBar setActive={this.setActive} toggleApplication={this.toggleApplication}/>
                </div>
            </div>
            </Hotkeys>
        );
    }
}
