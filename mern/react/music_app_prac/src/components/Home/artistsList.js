import React from 'react';
import { BrowserRouter, Route , Link, Switch} from 'react-router-dom';

const ArtistsList = ({allArtsits}) => {
    const list = (values) => (

        values ?
            values.map(artist => (
                <Link 
                    key={artist.id}
                    to={`/artist/${artist.id}`} 
                    className="artist_item" 
                    style={{
                        background: `url('/images/covers/${artist.cover}.jpg')`
                    }}
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
        <div className="artists_list">
            <h4>Browse the artists</h4>
            <div className="artist_container">
                { list(allArtsits)}
            </div>
        </div>
    )
}

export default ArtistsList;
