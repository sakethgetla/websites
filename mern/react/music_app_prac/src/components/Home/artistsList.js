import React from 'react';
import { BrowserRouter, Route , Link, Switch} from 'react-router-dom';

const ArtistsList = ({allArtsits}) => {
    const list = (values) => (

        values ?
            values.map(artist => (
                <Link 
                    key={artist.id}
                    to={"/"} 
                    className="artist_item" 
                >
                    <div>
                        {artist.name}
                    </div>
                </Link>
            ))
        : null
    )
                    //style={{
                    //    background: `url('/images/covers/${artist.cover}.jpg`
                    //}}

    console.log(allArtsits)
    return(
        <div className="artists_List">
            <h4>Browse the artists</h4>
            <div className="artist_container">
                { list(allArtsits)}
            </div>
        </div>
    )
}

export default ArtistsList;
