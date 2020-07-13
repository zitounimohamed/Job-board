import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
class Demandes extends Component {
    constructor(props){
        super(props);
        this.state={
            apply : []
        }
    }
    componentDidMount(){
        const   idjob = localStorage.getItem('idjob')
        console.log(idjob);
    let url = `http://localhost:5000/demandes/jobsapply/${idjob}`
    axios.get(url).then((response) => {
        console.log(response);
      

        this.setState({
            apply: response.data 
        });
        
    }).catch(error => {
        console.log(error);
    });
    }

    delete(id){
        axios.delete(`http://localhost:5000/demandes/deleteapp/${id}`)
        .then((response)=>{
          if(response.status===200 && response!= null)
          {
              window.location.reload()        
          }
        })
        
     }
    render() {
        return (
            
            <div style={{marginLeft: '120px' , marginTop: '10px'}} >
                <table className="table">
        <thead>
                

          <tr>
            <th className='pl-5'>Visualiser</th>
            <th>Titre de poste</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody> 
          {this.state.apply.map(apply => (<tr key={apply._id}>
            <td> <Link to ={`/${apply.filep}`}className= "py-2 mr-1"><i class="fa fa-arrow-circle-right pl-5" aria-hidden="true" style={{fontSize: 25}} download></i></Link></td>
            <td>{apply.nom}</td>
            <td>{apply.email}</td>
            
            <td>
            <button className="button" onClick={()=> this.delete(apply._id)}  ><i class="fa fa-trash" aria-hidden="true"></i></button>

              {' '}
            </td>
          </tr>))}
        </tbody>
      </table>
            </div>
        );
    }
}

export default Demandes