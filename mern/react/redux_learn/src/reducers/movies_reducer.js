//import { combineReducers } from 'redux';

//const data = {
//    type: 'moviesList',
//    payload: [
//        {id:12, name:'Pulp ficiton'}
//    ]
//}

export default function (state = [], action){
    switch(action.type){
        case 'moviesList':
            return action.payload;
        default :
            return state;
    }
}
