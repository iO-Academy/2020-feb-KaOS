import React from "react";
import './TaskBar.css';
import Clock from '../../Clock'
import IconComponent from "./Icon";

export default class TaskBar extends React.Component {
    render() {
        return (
            <div className='TaskBar'>
                <div>
                    <IconComponent name='About' open={this.props.toggleApplication}/>
                    <IconComponent name='Gif' open={this.props.toggleApplication}/>
                </div>
                <Clock />
            </div>
        );
    }
}
