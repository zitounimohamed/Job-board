import axios from 'axios';
import {AUTH_SIGN_UP, AUTH_ERROR ,AUTH_SIGN_OUT,AUTH_SIGN_IN,SET_CURRENT_USER,ADD_CV,SIGN_UP_SOC,GETJOB} from './types'


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
      const res = await axios.post("http://localhost:5000/users/signup",data)

            console.log("res",res);   
           dispatch({
                type : AUTH_SIGN_UP,
                payload : res.data.role ,
                
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
export const onejob = data =>{
    return async dispatch =>{
        try {
            const res = await axios.get("http://localhost:5000/jobs/onejob",data)
            console.log("res",res);
            
        } catch (error) {
            
        }
    }
}
export const signupS = data =>{
    return async dispatch => {
        try {
      const res = await axios.post("http://localhost:5000/users/signupS",data)

            console.log("res",res);   
           dispatch({
                type : SIGN_UP_SOC,
                payload : res.data.token ,
                pay : data

            });

            localStorage.setItem('JTW_Token',res.data.token);
        } catch (error) {
            dispatch({
                type : AUTH_ERROR,
                payload : 'Email is already used !!',
                

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
              payload : res.data ,
              pay : res
              
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
        localStorage.clear()

      dispatch({
        type: AUTH_SIGN_OUT ,
        payload : ''
      })
    };

}
export const newcv = data =>{
    return async dispatch => {
        try {
      const res = await axios.post("http://localhost:5000/cvs/newcv",data)
            console.log("res",res);   
           dispatch({
                type : ADD_CV,
                payload : res.data 
            });

            localStorage.setItem('JTW_Token',res.data);
        } catch (error) {
            dispatch({
                type : AUTH_ERROR,
                payload : 'Email is already used !!'
            })
            
        }
    };
}
export const checkAuth = () => {
    return async dispatch => {
      try {
        await axios.get('http://localhost:5000/users/status');
  
        dispatch({
          type: AUTH_SIGN_IN,
          payload : "logged"
        });
  
        console.log('user is auth-ed')
      } catch(err) {
        console.log('error', err)
      }
    };
  }

  // Set logged in user
export const setCurrentUser = decoded => {
    return {
      type: SET_CURRENT_USER,
      payload: decoded
    };
  };

export const getjob =(_id,history)=> async (dispatch)=>{
    try {
        const res = await axios.get(
            `http://localhost:5000/jobs/${_id}`
        );
        console.log(res);
        
        dispatch({
            type : GETJOB ,
            payload : res.data

        });
    } catch (error) {
        history.push('/home')
        
    }
};
