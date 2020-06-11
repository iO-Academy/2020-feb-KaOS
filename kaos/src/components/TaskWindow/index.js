import React from 'react';
import Window from '../Desktop/WindowComponent';
import './TaskWindow.css';

export default class TaskWindow extends React.Component {
    render() {
        return (
            <Window setActive={this.props.setActive} active={this.props.active} height={270}
                    close={this.props.close} name='Task'>
                {Object.keys(this.props.applications).filter(app => this.props.applications[app]).map((app) => (
                    <div className='managerContainer'>
                        {app}.exe
                        <button className='bringToFrontButton' type='button' onClick={() => {
                            setTimeout(() => this.props.setActive(app), 250)}}>
                            Bring to Front
                        </button>
                        <button className='closeButton' type='button' onClick={() => {this.props.toggleApplication(app)}}>
                            Close
                        </button>
                    </div>
                ))}
            </Window>
        )
    }
}