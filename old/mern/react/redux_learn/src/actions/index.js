import {MOVIES_LIST} from '../types'
import axios from 'axios'

export function getMoviesList(){
    console.log(MOVIES_LIST)
    const request = axios.get('http://localhost:3004/posts').then(
        response => {
            console.log(response.data)
            return response.data;
        }
    )
    return {
        type: MOVIES_LIST,
        payload: request
    }
}
