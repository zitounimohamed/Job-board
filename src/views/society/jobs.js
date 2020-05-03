import React, { Component } from 'react';
import ViewJobs from '../../Components/society/listjob'
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
    let url = 'http://localhost:5000/jobs/alljobs'
    axios.get(url).then((response) => {
        console.log(response);
      

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
                    <ViewJobs   title={jobs.title} location={jobs.location}type={jobs.type} />)
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
