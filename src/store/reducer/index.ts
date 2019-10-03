import { action } from '../../models';

const intialState = {
    user : {}
}


export default function rootReducer(state = intialState, action : action) : any{
    switch( action.type){
        case 'JOIN_CLASS':
            console.log(action.code)
            return {
                ...intialState, class : [action.code]
            };
        default:
            return state;
    };
}