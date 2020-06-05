import React from 'react';
import TaskBar from "./Taskbar";
import './Desktop.css';

export default class Desktop extends React.Component {
    render() {
        return (
            <div className="Desktop" >
                {this.props.children}
                <TaskBar />
            </div>
        ) ;
    }
}