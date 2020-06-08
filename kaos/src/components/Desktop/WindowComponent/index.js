import React from 'react'
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
                <div>
                    <div className="windowTop">
                        <button onClick={() => {this.props.close(this.props.name)}}>
                            X
                        </button>
                        {this.props.name}
                    </div>
                    <div className='windowMain'>{this.props.children}</div>
                </div>
            </Draggable>
        );
    }
}

export default Window;

