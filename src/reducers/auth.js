
import {AUTH_SIGN_UP, AUTH_ERROR,AUTH_SIGN_OUT,AUTH_SIGN_IN,SIGN_UP_SOC,PROFILE} from '../actions/types'



function checkAuthentication() {
    const token = localStorage.getItem("JTW_Token");
    const id = localStorage.getItem("id")
    
  
    if (token) {
      return {
        isAuthenticated: true,
        token,
        id,
        isClient : true,
        errorMessage: "",
        role : ''
      };
    }
    return {
      isAuthenticated: false,
 
      token: "",
      errorMessage: "",
      id : "",
      role : ''

    };
  }

  const DEFAULT_STATE = checkAuthentication();

export default (state=DEFAULT_STATE ,action)=>{
    switch (action.type) {
        case PROFILE:
            return {...state, isAuthenticated: true ,role: action.pay.role};
        case AUTH_SIGN_UP:
            return {...state, token: action.payload,id:action.pay,isAuthenticated: true,isClient : true, userData : action.pay, errorMessage : ''};
        case SIGN_UP_SOC:
            return {...state, token: action.payload,isAuthenticated: true,isClient : false, userData : action.pay,errorMessage : ''};
        case AUTH_SIGN_IN:
            return { ...state, token :action.payload,id:action.pay,isAuthenticated: true,userData : action.pay, errorMessage: '' }
        case AUTH_SIGN_OUT:
            return { ...state, token :action.payload, isAuthenticated: false, errorMessage: '' }
        case AUTH_ERROR : 
            return{...state,errorMessage : action.payload}
        
        default:
            return state;
    }
}