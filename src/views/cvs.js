import React, { Component } from 'react';
import ViewCv from '../Components/employee/listcv'
import axios from "axios";
import {compose} from "redux";
import {connect} from "react-redux";
import ImageSlider from './imageslider';
class cvs extends Component {
    constructor(props) {
        super(props);
            this.state ={
        cv : null
};
    }

async componentDidMount(){
    let url = 'http://localhost:5000/cvs/allcv'
    axios.get(url).then((response) => {
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
	  isAuthenticated: state.isAuthenticated
	}
  }
export default compose(connect(mapStateToProps))(cvs);
