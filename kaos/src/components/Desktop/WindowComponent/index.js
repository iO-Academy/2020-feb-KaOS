import React from 'react'
import { Resizable } from 're-resizable'
import Draggable from 'react-draggable'
import './WindowComponent.css'

class Window extends React.Component {

    render() {
        return (
            <div onClick={() => this.props.setActive(this.props.name)}
            className={this.props.active === this.props.name ? "active" : "inactive"}>
                <Draggable
                    axis='both'
                    handle='.WindowTop'
                    defaultPosition={{
                        x: Math.floor(Math.random() * 1000) + 51,
                        y: Math.floor(Math.random() * 50) + 51
                    }}
                    position={null}
                    grid={[1, 1]}
                    scale={1}
                    >
                    <Resizable
                    minWidth={
                        300
                    }
                    defaultSize={{
                        width: 300,
                        height: this.props.height
                    }}>

                        <div className='WindowContainer'>
                        <div className='WindowTop'>
                            <button className='ExitButton' onClick={() => {this.props.close(this.props.name)}}>
                                X
                            </button>
                            {this.props.name}
                        </div>
                        <div className='WindowMain'>{this.props.children}</div>
                        </div>
                    </Resizable>
                </Draggable>
            </div>
        );
    }
}

export default Window;

