import React from 'react';
import LogoOrange from '../../../Image/LogoOrange.svg';
import LogoGreen from '../../../Image/LogoGreen.svg';
import LogoBlue from '../../../Image/LogoBlue.svg';
import LogoRed from '../../../Image/LogoRed.svg';

export default class Logo extends React.Component {
    render() {
        if(this.props.theme === 'Red') {
            return (
                <img className='Logo' src={LogoRed} alt='Logo'/>
            );
        }
        if(this.props.theme === 'Blue') {
            return (
                <img className='Logo' src={LogoBlue} alt='Logo'/>
            );
        }
        if(this.props.theme === 'Green') {
            return (
                <img className='Logo' src={LogoGreen} alt='Logo'/>
            );
        }
        if(this.props.theme === 'Orange') {
            return (
                <img className='Logo' src={LogoOrange} alt='Logo'/>
            );
        }
    }
}