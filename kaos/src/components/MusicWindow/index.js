import React from 'react';
import Window from '../Desktop/WindowComponent';

export default class MusicWindow extends React.Component {
    render() {
        return (
            <Window setActive={this.props.setActive} active={this.props.active} close={this.props.close} name='Music'>
                <iframe width='100%' height='300' scrolling='no' frameBorder='no' allow='autoplay'
                        src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/128221496&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'>
                </iframe>
            </Window>
        )
    }
}