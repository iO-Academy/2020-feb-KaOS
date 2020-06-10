import React from 'react';
import Window from '../Desktop/WindowComponent';


export default class TaskWindow extends React.Component {
    render() {
        return (
            <Window setActive={this.props.setActive} active={this.props.active} height={270}
                    close={this.props.close} name='Task'>
                {Object.keys(this.props.applications).filter(app => this.props.applications[app]).map((app) => (
                    <div>
                        {app}.exe<br />
                        <button type='button' onClick={() => {this.props.toggleApplication(app)}}>
                            Close
                        </button>
                        <button type='button' onClick={() => {
                            setTimeout(() => this.props.setActive(app), 250)
                            }}>
                            Bring to Front
                        </button>
                    </div>
                ))}
            </Window>
        )
    }
}