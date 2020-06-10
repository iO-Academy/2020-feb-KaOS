import React from 'react';
import Window from '../Desktop/WindowComponent';


export default class TaskWindow extends React.Component {
    render() {
        return (
            <Window setActive={this.props.setActive} active={this.props.active} height={250}
                    close={this.props.close} name='Task'>
                {Object.keys(this.props.applications).filter(app => this.props.applications[app]).map((app) => (
                    <div>
                        {app}
                    </div>
                ))}
            </Window>
        )
    }
}