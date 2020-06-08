import React from 'react'
import { Resizable } from 're-resizable'
import Draggable, {DraggableCore} from 'react-draggable'
import './WindowComponent.css'

class Window extends React.Component {

    render() {
        return (
                <Draggable
                    axis="both"
                    handle=".windowTop"
                    defaultPosition={{x: 500, y: 500}}
                    position={null}
                    grid={[1, 1]}
                    scale={1}
                    onStart={this.handleStart}
                    onDrag={this.handleDrag}
                    onStop={this.handleStop}>
                    <Resizable
                        defaultSize={{
                            width: 200,
                            height: 200
                        }}>
                        <div className="windowContainer">
                        <div className="windowTop">
                            <button onClick={() => {this.props.close(this.props.name)}}>
                                X
                            </button>
                            {this.props.name}
                        </div>
                        <div className='windowMain'>{this.props.children}</div>
                        </div>
                    </Resizable>
                </Draggable>
        );
    }
}

export default Window;

