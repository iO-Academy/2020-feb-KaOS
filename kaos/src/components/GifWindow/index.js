import React from "react";
import Window from "../Desktop/WindowComponent";
import { GiphyFetch } from "@giphy/js-fetch-api";
import './GifWindow.css'

export default class GifWindow extends React.Component {
    state = {
        gifs: {},
        loading: true
    }

    getGif = async () => {
       const giphy = new GiphyFetch('ne12OfQigz9qivvaPFcvox98fuA5SRyV');
       const {data: gifs} = await giphy.random()
        this.setState({gifs, loading: false});
        console.log(gifs);
    }

    componentDidMount() {
        this.getGif()
    }

    render() {
        return (
            <Window close={this.props.close} name='Gif'>
                <div className='GifContent'>
                    {!this.state.loading?<img src={this.state.gifs.images.fixed_height.url}/>:'Loading...'}
                </div>
            </Window>
        )
    }
}