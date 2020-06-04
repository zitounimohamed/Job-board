import React, { Component } from 'react';
import OneJob from '../../Components/society/singlejob'
import axios from "axios";
import {compose} from "redux";
import {connect} from "react-redux";
class Jobs extends Component {
    constructor(props) {
        super(props);
            this.state ={
        jobs : null
};
    }

    async componentDidMount(){
        const {id} = this.props.match.params
        let url = `http://localhost:5000/jobs/${id}`
        axios.get(url).then((response) => {          
            this.setState({
                jobs: response.data 
            });
        }).catch(error => {
            console.log(error);
        });
    }
    
        
                

    

    render() {
        return (
            <div>
            {this.state.jobs !== null && this.state.jobs.map(jobs => {

                return (
                    <OneJob   title={jobs.title} location={jobs.location}type={jobs.type} description={jobs.description} />)
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
export default compose(connect(mapStateToProps))(Jobs);
