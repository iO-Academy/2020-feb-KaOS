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
                    defaultPosition={{x: 50, y: 50}}
                    position={null}
                    grid={[1, 1]}
                    scale={1}
                    onStart={this.handleStart}
                    onDrag={this.handleDrag}
                    onStop={this.handleStop}>
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

