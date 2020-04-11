import axios from 'axios';
import {AUTH_SIGN_UP, AUTH_ERROR ,AUTH_SIGN_OUT,AUTH_SIGN_IN} from './types'


export const oauthGoogle = data =>{
    return async dispatch =>{
        const res=await axios.post('http://localhost:5000/users/oauth/google', {
            access_token: data
          });
        console.log('resp',res);
        
        dispatch({
            type : AUTH_SIGN_UP,
            payload : res.data.token
        });
        
        localStorage.setItem("JWT_Token",res.data.token)
    };
}

export const oauthFacebook = data =>{
    return async dispatch =>{
        const resp = await axios.post('http://localhost:5000/users/oauth/facebook',{  access_token : data});
        console.log('resp',resp);
        
        dispatch({
            type : AUTH_SIGN_UP,
            payload : resp.data.token
        });
        
        localStorage.setItem("JWT_Token",resp.data.token)
    };
}



export const signup = data =>{
    return async dispatch => {
        try {
      const res= await axios.post('http://localhost:5000/users/signup',data);
            console.log("res",res);
            
           dispatch({
                type : AUTH_SIGN_UP,
                payload : res.data.token 
            });

            localStorage.setItem('JTW_Token',res.data.token);
        } catch (error) {
            dispatch({
                type : AUTH_ERROR,
                payload : 'Email is already used !!'
            })
            
        }
    };
}

export const signin = data =>{
  return async dispatch => {
      try {
          const res = await axios.post('http://localhost:5000/users/signin',data);
          console.log('res',res);

          dispatch({
              type : AUTH_SIGN_IN,
              payload : res.data.token 
          });

          localStorage.setItem('JTW_Token',res.data.token);
      } catch (error) {
          dispatch({
              type : AUTH_ERROR,
              payload : 'Email and password combination isn\'t valide'
          })
          
      }
  };
}

export const signOut = () => {
    return async dispatch => {
      //await axios.get('http://localhost:5000/users/signout');
      localStorage.removeItem('JTW_Token');

      dispatch({
        type: AUTH_SIGN_OUT, 
        payload:  ''
      })
    };

}
