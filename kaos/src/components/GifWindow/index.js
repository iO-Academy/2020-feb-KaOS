import React from 'react';
import Window from '../Desktop/WindowComponent';
import './GifWindow.css';

export default class GifWindow extends React.Component {
    state = {
        gifs: {},
        loading: true
    };

    getGif = async () => {
        let gifs = await fetch('http://api.giphy.com/v1/gifs/random?api_key=ne12OfQigz9qivvaPFcvox98fuA5SRyV');
        gifs = await gifs.json();
        this.setState({gifs, loading: false});
    };

    componentDidMount() {
        this.getGif()
    }

    render() {
        return (
            <Window setActive={this.props.setActive} active={this.props.active} close={this.props.close} name='Gif'>
                <div className='GifContent'>
                    {!this.state.loading?<img src={this.state.gifs.data.image_original_url}/>:'Loading...'}
                </div>
            </Window>
        )
    }
}