import React, { Component } from 'react';
import { connect } from 'react-redux';

class role extends Component {
    async componentDidMount(){
        const t = this.props.token
        console.log("token",t);
        
         await Axios.get('http://localhost:5000/users/secret',setAuthToken(t))
        .then((response)=>{
            if(response.status===200 && response!= null )
        {
          this.setState({profile : response.data.local})
        }
        })
        
    }
    render() {
        if((this.state.profile.role)==='societé')
        return (
            <div>
                
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
      isAuth: state.auth.isAuthenticated,
      jwtToken: state.auth.token
    }
  }

export default connect(mapStateToProps)(role);