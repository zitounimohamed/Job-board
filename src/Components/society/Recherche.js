import React, { Component } from 'react';
import axios from 'axios'
import ViewCv from './rech_result'

class Recherche extends Component {
    constructor(props) {
        super(props);
            this.state ={
        titre : null,
        cv: null
        
};
      

    }

 handleInputChange = (event) =>{
    let url = 'http://localhost:5000/cvs/cvtit'
    let title = this.setState({
        titre : event.target.value
        
    })
    
        
    axios.get(url,title).then((response) => {
        console.log(response);
        this.setState({
            cv: response.data 
        });
        
    }).catch(error => {
        console.log(error);
    });
}    

/*async handleSubmit(){
    let url = 'http://localhost:5000/cvs/cvtit'
    const data ={
        title : this.state.title}
        
    axios.get(url,data).then((response) => {
        console.log(response);
      

        this.setState({
            cv: response.data 
        });
        
    }).catch(error => {
        console.log(error);
    });
}*/
  
    render() {
        return (
            
            <div className='container'>
                <form className= "p-5 p-md-5 border rounded test" onSubmit={this.handleInputChange}>
                <h2 className='titre'>Recherche des Cv</h2>

                <div className='form-group pt-3'>
                    <label for="exampleFormControlFile1" className='lab pb-3'>Titre de poste désiré :</label>
                    <input className="form-control" type="text" placeholder="Titre de poste désiré" name="titre" id="titre" onChange={this.handleInputChange}/>
                </div>
                <div className='row pt-5'>
                        <button type='submit'  className='btn btn-primary btn-lg ' id='but'  >Rechercher</button>
                        </div>
                </form>
                
            </div>
           
        );

    }
}
export default Recherche