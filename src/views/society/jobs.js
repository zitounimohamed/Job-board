import React, { Component } from 'react';
import ViewJobs from '../../Components/society/listjob'
import axios from "axios";
import {compose} from "redux";
import {connect} from "react-redux";
import '../../App.css'
class Jobs extends Component {
    constructor(props) {
        super(props);
            this.state ={
        jobs : null,
        emploi : null
};
    }

async componentDidMount(searchTerm){
    let url = 'http://localhost:5000/jobs/alljobs'
    axios.get(url).then((response) => {
       // console.log(response);
        
        const emploisRow = []
        const emplois = response.data
        emplois.forEach((emploi) =>{
           // console.log(emploi.title);
            emploisRow.push(emploi)
            //console.log(emploisRow);
            if(emploi.title== searchTerm){
                console.log(emploi.title);
                this.setState({
                    jobs: emploi.data
                });
            }else 
            {
                this.setState({
                    jobs: response.data                    
                });
                
            }
            
        })
        
    }).catch(error => {
        console.log(error);
    });
}

  
searchChangeHandler(e){
    const boundObject = this
    const searchTerm = e.target.value
    boundObject.componentDidMount(searchTerm)
}      
                

    

    render() {
        return (
        <div>
            <section class="ftco-section bg-light pt-5" >
			    <div class="container">
                    <div class="row justify-content-center mb-5 pb-3">
                    <div class="col-md-7 heading-section text-center ftco-animate">
          	            <span class="subheading">Recently Added Jobs</span>
                        <h2 class="mb-4"><span>Recent</span> Jobs</h2>
                    </div>
                    
                </div>
                <input style={{
                    fontSize : 24,
                    display : 'block',
                    width : '98%',
                    paddingTop : 8 ,
                    paddingBottom : 8,
                    paddingLeft : 16 ,
                }} onChange={this.searchChangeHandler.bind(this)} placeholder='Entrer le nom emploi' />

                <div className='jobs'>
                    {this.state.jobs !== null && this.state.jobs.map(jobs => {

                        return (
                            <ViewJobs  _id={jobs._id} title={jobs.title} location={jobs.location}type={jobs.type} file={jobs.file} />)
                    })}
                </div>
                </div>
            </section>
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
