import React, { Component } from 'react';
import ImageSlider from '../../views/imageslider'
import axios from 'axios'
import {Link} from 'react-router-dom'
class Myjobs extends Component {
    constructor(props){
        super(props);
        this.state={
            jobs : [],
            forma : []
        }
    }
    myjobs(){
        const id = localStorage.getItem('id')
    
    let url = `http://localhost:5000/jobs/jobbyuser/${id}`
    axios.get(url).then((response) => {
        console.log(response);
      

        this.setState({
            jobs: response.data 
        });
        
    }).catch(error => {
        console.log(error);
    });
    }
    myformation(){
      const id = localStorage.getItem('id')
    
      let url = `http://localhost:5000/formations/myforma/${id}`
      axios.get(url).then((response) => {
          console.log(response);
        
  
          this.setState({
              forma: response.data 
          });
          
      }).catch(error => {
          console.log(error);
      });
    }
    componentDidMount(){
      this.myjobs();
      this.myformation()
    }

    delete(id){
      axios.delete(`http://localhost:5000/jobs/deletejob/${id}`)
      .then((response)=>{
        if(response.status===200 && response!= null)
        {
            window.location.reload()        
        }
      })
      
   }
   deleteForma(id){
    axios.delete(`http://localhost:5000/formations/deleteForma/${id}`)
    .then((response)=>{
      if(response.status===200 && response!= null)
      {
          window.location.reload()        
      }
    })
    
 }

    render() {
        return (
            <div>
            {this.state.jobs !== null && this.state.jobs.map(jobs => {
              localStorage.setItem("idjob",jobs._id)

                return (
                    
                    <div className="container">
				
                    <div className="row pt-3">
                        <div className="col-md-12 ftco-animate">
    
                <div className="job-post-item bg-white p-4 d-block d-md-flex align-items-center ">
    
                  <div className="mb-4 mb-md-0 mr-5">
                    <div className="job-post-item-header d-flex align-items-center">
                      <h3 className="mr-3 text-black h3" >
                      Emploi : {jobs.title}  
                      </h3>
                      <div className="badge-wrap">
                       <span className="bg-primary text-white badge py-2 px-3">{jobs.type}</span>
                      </div>
                    </div>
                    <div className="job-post-item-body d-block d-md-flex">
                      <div className="mr-3"><span className="icon-layers"></span> <h6> {jobs.location} </h6></div>
                      <div><span className="icon-my_location"></span> <span></span></div>
                    </div>
                  </div>
    
                  <div className="ml-auto d-flex">
                    <Link to ={`/singlepage/${jobs._id}`} className="btn btn-primary py-2 mr-1">Plus Détails</Link>
                    <button className="button" onClick={()=> this.delete(jobs._id)}  ><i class="fa fa-trash" aria-hidden="true"></i></button>

                  </div>
                </div>
              </div>
              </div>
              
               
              
              </div>)
        })}
        {this.state.forma !== null && this.state.forma.map(forma => {

                return (
                    
                    <div className="container">
				
                    <div className="row pt-3">
                        <div className="col-md-12 ftco-animate">
    
                <div className="job-post-item bg-white p-4 d-block d-md-flex align-items-center ">
    
                  <div className="mb-4 mb-md-0 mr-5">
                    <div className="job-post-item-header d-flex align-items-center">
                      <h3 className="mr-3 text-black h3" >
                      Formation : {forma.titre}  
                      </h3>
                      <div className="badge-wrap">
                       <span className="bg-primary text-white badge py-2 px-3">{forma.type}</span>
                      </div>
                    </div>
                    <div className="job-post-item-body d-block d-md-flex">
                      <div className="mr-3"><span className="icon-layers"></span> <h6> {forma.lieu} </h6></div>
                      <div><span className="icon-my_location"></span> <span></span></div>
                    </div>
                  </div>
    
                  <div className="ml-auto d-flex">
                    <Link to ={`/singlepage/${forma._id}`} className="btn btn-primary py-2 mr-1">Plus Détails</Link>
                    <button className="button" onClick={()=> this.deleteForma(forma._id)}  ><i class="fa fa-trash" aria-hidden="true"></i></button>

                  </div>
                </div>
              </div>
              </div>
              
               
              
              </div>)
        })}
        </div>
        );
    }
}

export default Myjobs;