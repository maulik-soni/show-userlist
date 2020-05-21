import * as actionTypes from '../constants/actionsTypes';
import Immutable from "immutable";

export default function loggedInUser(state = Immutable.Map(), action) {
    let newState = {};
    switch(action.type){
        case actionTypes.RECEIVE_USER_DETAILS:
            newState = state;
            return newState;

        default:
            return state;
    }
}