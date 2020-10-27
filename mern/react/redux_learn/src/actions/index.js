export function getMoviesList(){
    return {
        type: 'moviesList',
        payload:[
            {id:1, name: 'rambo'},
            {id:2, name: 'bambo'},
            {id:3, name: 'pambo'}
        ]
    }
}
