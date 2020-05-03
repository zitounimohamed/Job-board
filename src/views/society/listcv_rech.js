import React, { Component } from 'react';
import axios from "axios";
import {compose} from "redux";
import {connect} from "react-redux";
import ViewCv from '../../Components/society/rech_result'
class cv_rech extends Component {
    constructor(props) {
        super(props);
            this.state ={
        titre : null,
        cv: null
};
    }

 handleInputChange = (event) =>{
    this.setState({
        titre : event.target.value
    })
}    

async handleSubmit(){
    let url = 'http://localhost:5000/cvs/cvtit'
    const data ={
        titre : this.state.titre}
    axios.get(url,data).then((response) => {
        console.log(response);
      

        this.setState({
            cv: response.data 
        });
        
    }).catch(error => {
        console.log(error);
    });
}
  
        
                

    

    render() {
        return (
            <div>
            {this.state.cv !== null && this.state.cv.map(cv => {

                return (
                    <ViewCv   titre={cv.titre}  />)
            })}
            </div>
        );
    }
}
function mapStateToProps(state) {
	return {
	  isAuthenticated: state.isAuthenticated
	}
  }
export default compose(connect(mapStateToProps))(cv_rech);
