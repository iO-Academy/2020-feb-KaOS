import React from "react";
import Window from "../Desktop/WindowComponent";


export default class ThemeWindow extends React.Component {
    render() {
        return (
            <Window setActive={this.props.setActive} active={this.props.active} height={150} close={this.props.close} name='Theme'>
                <div className='AboutContent'>
                    <button type='button' onClick={()=> {
                        this.props.setTheme('Red')
                    }}>Red</button>
                    <button type='button' onClick={()=> {
                        this.props.setTheme('Blue')
                    }}>Blue</button>
                    <button type='button' onClick={()=> {
                        this.props.setTheme('Orange')
                    }}>Orange</button>
                    <button type='button' onClick={()=> {
                        this.props.setTheme('Green')
                    }}>Green</button>
                </div>
            </Window>
        )
    }
}

