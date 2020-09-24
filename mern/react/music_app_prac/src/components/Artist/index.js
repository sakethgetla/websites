import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Route , Link, Switch} from 'react-router-dom';
const URL_ARTISTS = 'http://localhost:3004/artists'

const Artist = (props) => {
    console.log(props)
    console.log(URL_ARTISTS + '/' + props.match.params.artistId)

    const [artist, setArtist] = useState('');

    useEffect(() => {
        axios.get(URL_ARTISTS + '/' + props.match.params.artistId).then( response => {
            console.log(response.data)
            setArtist(response.data)
        })
    }, [props])

    const showAlbums = (albums) => (
        albums ?
            albums.map(( album, i ) => (
                <img 
                    key={i} 
                    alt=""
                    src={`/images/albums/${album.cover}.jpg`}
                >
                </img>
            ))
        : null
    )
                    //<span  style={{
                    //    background:`url('/images/albums/${album.cover}.jpg') no-repeat`
                    //}}>
                    //</span>

    return (
        <>
            <div className="artist_bio">
                <div className="avatar">
                    <span style={{
                        background:`url('/images/covers/${artist.cover}.jpg') no-repeat`
                    }}>
                    </span>
                </div>
            </div>
            <div className="bio">
                <h3>{artist.name}</h3>
                <div className="bio_text">
                    {artist.bio}
                </div>
            <br/>
                <div className="albums_list">
                    {showAlbums(artist.albums)}
                </div>
            </div>
            <br/>
            <Link to="/artist/4">go to pink floyd</Link>
        </>
    )
}

export default Artist;
