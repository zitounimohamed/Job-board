
import {AUTH_SIGN_UP, AUTH_ERROR,AUTH_SIGN_OUT,AUTH_SIGN_IN,SET_CURRENT_USER,SIGN_UP_SOC} from '../actions/types'



function checkAuthentication() {
    const token = localStorage.getItem("JTW_Token");
  
    if (token) {
      return {
        isAuthenticated: true,
        token,
        errorMessage: "",
        userData : ''
      };
    }
    return {
      isAuthenticated: false,
      token: "",
      errorMessage: "",
      userData : ''

    };
  }

  const DEFAULT_STATE = checkAuthentication();

export default (state=DEFAULT_STATE ,action)=>{
    switch (action.type) {
        case SET_CURRENT_USER:
            return {...state, isAuthenticated: true ,user: action.payload};
        case AUTH_SIGN_UP:
            return {...state, token: action.payload,isAuthenticated: true, userData : action.pay, errorMessage : ''};
        case SIGN_UP_SOC:
            return {...state, token: action.payload,isAuthenticated: true, userData : action.pay,errorMessage : ''};
        case AUTH_SIGN_IN:
            return { ...state, token :action.payload,isAuthenticated: true,userData : action.pay, errorMessage: '' }
        case AUTH_SIGN_OUT:
            return { ...state, token :action.payload, isAuthenticated: false, errorMessage: '' }
        case AUTH_ERROR : 
            return{...state,errorMessage : action.payload}
        
        default:
            return state;
    }
}