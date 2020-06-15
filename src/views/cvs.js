import React, { Component } from 'react';
import ViewCv from '../Components/employee/listcv'
import axios from "axios";
import {compose} from "redux";
import {connect} from "react-redux";
class cvs extends Component {
    constructor(props) {
        super(props);
            this.state ={
        cv : null
};
    }

async componentDidMount(){
    const id = this.props.idUser
    console.log(id);
    
    let url = 'http://localhost:5000/cvs/mycv'
    axios.get(url,id).then((response) => {
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
                    <ViewCv file={cv.file}  titre={cv.titre}  ></ViewCv>)
            })}
            </div>
        );
    }
}
function mapStateToProps(state) {
	return {
      isAuthenticated: state.auth.isAuthenticated,
      idUser : state.auth.id
	}
  }
export default compose(connect(mapStateToProps))(cvs);
