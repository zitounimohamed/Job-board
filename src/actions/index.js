import axios from 'axios';
import {AUTH_SIGN_UP, AUTH_ERROR ,AUTH_SIGN_OUT,
        AUTH_SIGN_IN,ADD_CV,SIGN_UP_SOC,GETJOB,PROFILE,
        REMOVEJOB,MODIFYJOB} from './types'
import setAuthToken from '../utils/Authorization'

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
              pay : ''
              
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
export const prof = (JWT_Token)=>{
    return async dispatch =>{
        try {
            
            const res = await axios.get('http://localhost:5000/users/secret',setAuthToken(JWT_Token))
            console.log("res",res);
            
            dispatch=({
                type : PROFILE ,
                payload : res.data,
                pay : res.data.local.role
            })
        } catch (error) {
            dispatch({
                type : AUTH_ERROR,
                payload : ''
            })
        }
        
       
    }
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

        } catch (error) {
            dispatch({
                type : AUTH_ERROR,
                payload : ''
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

export const deljob = (id,history)=> async (dispatch)=>{
    try {
        const res = await axios.delete(`http://localhost:5000/jobs/deletejob/${id}`);
        window.location.reload(false);
        dispatch({
            type : REMOVEJOB,
            payload :history.push('/home')
        });

        
    } catch (error) {
        history.push('/home')
    }
}

export const modifyjob = (id)=> async(dispatch)=>{
    try {
        await axios.put(`http://localhost:5000/jobs/deletejob/${id}`);
        dispatch({
            type : MODIFYJOB ,
            payload : "done"
        });
    } catch (error) {
        console.log(error);
        
    }
}

export const getjob =(id,history)=> async (dispatch)=>{
    try {
        const res = await axios.get(
            `http://localhost:5000/jobs/${id}`
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
