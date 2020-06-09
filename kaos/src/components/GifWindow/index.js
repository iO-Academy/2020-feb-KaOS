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
       const {data: gifs} = await giphy.trending({limit: 1})
        this.setState({gifs, loading: false});
    }

    componentDidMount() {
        this.getGif()
    }

    render() {
        return (
            <Window close={this.props.close} name='Gif'>
                <div className='GifContent'>
                    {!this.state.loading?<img src={this.state.gifs[0].images.fixed_height.url}/>:'Loading...'}
                    {console.log(this.state.gifs[0])}
                </div>
            </Window>
        )
    }
}