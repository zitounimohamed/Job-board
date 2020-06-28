import React, { Component } from 'react';
import ViewFormation from '../../Components/formations/listFormation'
import axios from "axios";
import {compose} from "redux";
import {connect} from "react-redux";
import '../../App.css'
import JobService from './SearchServ'

class Formations extends Component {
    constructor(props) {
        super(props);
            this.state ={
        formations : [],
        currentjob : null,
        currentindex : -1,
        searchTitle : ""
    };
    this.searchTitle = this.searchTitle.bind(this)
    this.onChangeSearchTitle= this.onChangeSearchTitle.bind(this)

    }
    onChangeSearchTitle(e){
      const searchTitle = e.target.value
      this.setState({
        searchTitle : searchTitle
      })
    }
    componentWillMount() {
      this.getData();
    }  

    
    getData = () => {
      axios.get("http://localhost:5000/formations/formations")
        .then((response) =>
        this.setState({
          formations : response.data
        })
        )       
    };  
    refreshList(){
      this.getData();
      this.setState({
        currentjob : null ,
        currentindex : -1
      });
    }  
  
 async searchTitle(){
    JobService.findByTitle(this.state.searchTitle).
    then(response=>{
      this.setState({
        formations : response.data
      })
      console.log(response);
      
      
    })
  }

  

    

    render() {
    const {searchTitle}= this.state        
        return (
        <div style={{paddingTop: 60}}>
            <section className="ftco-section bg-light pt-5 pb-5" >
			    <div className="container">
                    <div className="row justify-content-center mb-5 pb-3">
                    <div className="col-md-7 heading-section text-center ftco-animate">
          	            <span className="subheading">Formations récemment ajoutées</span>
                        <h2 className="mb-4"><span>Formations</span> récentes</h2>
                    </div>
                    
                </div>
          <div className="list row">
            <div className='col md-8' >
              <div className='input-group'>
                <input
                type = 'text' 
                className='form-control'
                placeholder='searchTitle'
                value = {searchTitle}
                onChange={this.onChangeSearchTitle}   
                />
                <button
                className='btn btn-primary'
                type='button'
                onClick={this.searchTitle}
                >
                  Search
                </button>
                </div>
                </div>
                </div>
                <div className='jobs'>
                    {this.state.formations !== null && this.state.formations.map(formations => {
                        return (                 
                            <ViewFormation  _id={formations._id} titre={formations.titre} ville={formations.ville}type={formations.type} file={formations.file} 
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
export default compose(connect(mapStateToProps))(Formations);
