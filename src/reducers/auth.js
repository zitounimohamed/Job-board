
import {AUTH_SIGN_UP, AUTH_ERROR,AUTH_SIGN_OUT,AUTH_SIGN_IN,SET_CURRENT_USER} from '../actions/types'

const DEFAULT_STATE = {
    isAuthenticated : false ,
    user: null,
    token : '', 
    errorMessage : ''

}


export default (state=DEFAULT_STATE ,action)=>{
    switch (action.type) {
        case SET_CURRENT_USER:
            return {...state, isAuthenticated: true ,user: action.payload
      };
        case AUTH_SIGN_UP:
            return {...state, token: action.payload,isAuthenticated: true, errorMessage : ''};
        case AUTH_SIGN_IN:
            return { ...state, token :action.payload,isAuthenticated: true, errorMessage: '' }
        case AUTH_SIGN_OUT:
            return { ...state, token :action.payload, isAuthenticated: false, errorMessage: '' }
        case AUTH_ERROR : 
            return{...state,errorMessage : action.payload}
        
        default:
            return state;
    }
}