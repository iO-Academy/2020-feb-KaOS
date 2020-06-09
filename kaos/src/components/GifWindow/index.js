import React from "react";
import Window from "../Desktop/WindowComponent";
import './GifWindow.css'

export default class GifWindow extends React.Component {
    state = {
        gifs: {},
        loading: true
    }


    // constructor(props) {
    //     super(props);
    //     // this.getGif = getGif;
    //     this.getGif()
    // }

    getGif = async () => {
       //let giphy = new GiphyFetch('ne12OfQigz9qivvaPFcvox98fuA5SRyV');
       // const {data: gifs} = await giphy.random()

        let data = await fetch("http://api.giphy.com/v1/gifs/random?api_key=ne12OfQigz9qivvaPFcvox98fuA5SRyV");
        data = await data.json()
        console.log(data)
        //this.setState({gifs, loading: false});
    }

    componentDidMount() {
        console.log('sfdsdf')
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