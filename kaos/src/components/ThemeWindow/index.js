import React from 'react';
import Window from '../Desktop/WindowComponent';
import './ThemeWindow.css';


export default class ThemeWindow extends React.Component {
    render() {
        return (
            <Window setActive={this.props.setActive} active={this.props.active} height={150}
                    close={this.props.close} name='Theme'>
                <div className='themeContainer'>
                    <button className='themeButton' type='button' onClick={()=> {
                        this.props.setTheme('Red')
                    }}>
                        <i className='fas fa-circle redButton'/>
                    </button>
                    <button className='themeButton' type='button' onClick={()=> {
                        this.props.setTheme('Blue')
                    }}>
                        <i className='fas fa-circle blueButton'/>
                    </button>
                    <button className='themeButton' type='button' onClick={()=> {
                        this.props.setTheme('Orange')
                    }}>
                        <i className='fas fa-circle orangeButton'/>
                    </button>
                    <button className='themeButton' type='button' onClick={()=> {
                        this.props.setTheme('Green')
                    }}>
                        <i className='fas fa-circle greenButton'/>
                    </button>
                </div>
            </Window>
        )
    }
}

