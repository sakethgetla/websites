import React, { Component } from 'react';
import axios from 'axios';
import Banner from './banner';

import ArtistsList from './artistsList';

const URL_ARTISTS = 'http://localhost:3004/artists'

class Home extends Component {
    state = {
        artists:[]
    }
    componentDidMount(){
        axios.get(URL_ARTISTS).then( response => {
            this.setState({artists: response.data})
        })
    }
    render(){
        console.log(this.state.artists)
        return(
            <>
                <Banner/>
                Home
                <ArtistsList allArtsits={this.state.artists}/>
            </>
        )
    }
}

export default Home;
