import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
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
        data : [],
        emp : ''
    };
    }
    

/*async componentDidMount(searchTerm){
    let url = 'http://localhost:5000/jobs/alljobs'
    try {
        axios.get(url).then((response) => {         
             
         })
    }catch(error) {
        console.log(error);
    };
}*/

  
searchChangeHandler(e){
  /* const emp = e.target.value
   this.setState(prevState => {
    /*const filteredData = prevState.data.filter(element => {
      return element.name.toLowerCase().includes(emp.toLowerCase());
    });

    return {
      emp,
      filteredData
    };
  });*/
}      
getData = () => {
    axios.get(`http://localhost:5000/jobs/alljobs`)
      .then((response) =>
      this.setState({
        jobs : response.data
      })
      )
      /*.then(data => {
        const { query } = this.state;
        const filteredData = data.filter(element => {
          return element.name.toLowerCase().includes(query.toLowerCase());
        });
*/
        
      
  };    
  componentWillMount() {
    this.getData();
  }      

    

    render() {
    
        
        return (
        <div>
            <section className="ftco-section bg-light pt-5" >
			    <div className="container">
                    <div className="row justify-content-center mb-5 pb-3">
                    <div className="col-md-7 heading-section text-center ftco-animate">
          	            <span className="subheading">Recently Added Jobs</span>
                        <h2 className="mb-4"><span>Recent</span> Jobs</h2>
                    </div>
                    
                </div>

                <Autocomplete
        freeSolo
        id="titre"
        disableClearable
        options={this.state.jobs!= null && this.state.jobs.map((jobs) =>
           jobs.title)}
        getOptionSelected={(jobs,value)=> value.value===this.state.jobs }
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search input"
            margin="normal"
            variant="outlined"
            InputProps={{ ...params.InputProps, type: 'search' }}
          />
          
        )}
      />

                <div className='jobs'>
                    {this.state.jobs !== null && this.state.jobs.map(jobs => {
                      

                        return (
                          
                            <ViewJobs  _id={jobs._id} title={jobs.title} location={jobs.location}type={jobs.type} file={jobs.file} 
                             />)
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
