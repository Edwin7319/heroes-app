import {typesApp} from '../types/types';

export default function authReducer(state = {}, action) {

    const {payload, type} = action;

    const {login, logout} = typesApp;

    switch (type) {
        case login:
            return {
                ...payload,
                log: 1,
            }
        case logout:
            return {
                log: 0,
            }
        default:
            return state;
    }
}