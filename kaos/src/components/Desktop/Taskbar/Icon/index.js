import React from "react";
import './Icon.css';

export default class IconComponent extends React.Component {
    render() {
        return (
            <div className='Icon' onClick={() => this.props.open(this.props.name)}>
                {this.props.name}
            </div>
        );
    }
}
