import React from "react";
import './TaskBar.css';
import Clock from '../../Clock'

export default class TaskBar extends React.Component {
    render() {
        return (
            <div className='TaskBar'>
                <Clock />
            </div>
        );
    }
}
