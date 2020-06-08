import React from 'react';
import TaskBar from "./Taskbar";
import './Desktop.css';
import Logo from "./Logo";

export default class Desktop extends React.Component {
    render() {
        return (
            <div className="Desktop" >
                <div className='LogoContainer'><Logo /></div>
                {this.props.children}
                <TaskBar />
            </div>
        ) ;
    }
}
