
import {AUTH_SIGN_UP, AUTH_ERROR,AUTH_SIGN_OUT,AUTH_SIGN_IN,SIGN_UP_SOC,PROFILE} from '../actions/types'



function checkAuthentication() {
    const token = localStorage.getItem("JTW_Token");
    const role = localStorage.getItem("role")
    const isAdmin = localStorage.getItem("isAdmin")
  
    if (token) {
      return {
        isAdmin,
        isAuthenticated: true,
        token,
        role,
        errorMessage: "",
      };
    }
    return {
      isAdmin : '',
      isAuthenticated: false,
      token: '',
      errorMessage: "",
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
            return { ...state, token :action.payload,role:action.pay,isAdmin : action.pa,isAuthenticated: true,userData : action.pay, errorMessage: '' }
        case AUTH_SIGN_OUT:
            return { ...state, token :action.payload, isAuthenticated: false, errorMessage: '' }
        case AUTH_ERROR : 
            return{...state,errorMessage : action.payload}
        
        default:
            return state;
    }
}