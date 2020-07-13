import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
class Recherche extends Component {
    constructor(props) {
        super(props);
            this.state ={
        titre : null,
        cv: []
        
};
    this.handleInputChange = this.handleInputChange.bind(this)

    }
    handleInputChange = (event) =>{
        this.setState({
          [event.target.name] : event.target.value
        });
      }
    getsearch = async () => {

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Accept", "application/json");
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          redirect: 'follow'
        };
        axios.post("http://localhost:5000/cvs/allcv", { title: this.state.titre })
          .then(result => 
            this.setState({
              cv: result.data
            })
            
            )
          .catch(error => console.log('error', error));
      };
      componentDidMount(){
          this.getsearch()
      }


    render() {
        return (
            
            <div className='container'>
                <form className= "p-5 p-md-5 border rounded test" >
                <h2 className='titre'>Recherche des Cv</h2>

                <div className='form-group pt-3'>
                    <label for="exampleFormControlFile1" className='lab pb-3'>Titre de poste désiré :</label>
                    <input className="form-control" type="text" placeholder="Titre de poste désiré" name="titre" id="titre" onChange={this.handleInputChange}/>
                </div>
                <div className='row pt-5'>
                        <button type='button' onClick={this.getsearch}  className='btn btn-primary btn-lg ' id='but'  >Rechercher</button>
                        </div>
                </form>
                <table className="table">
        <thead>
                <div class="form-group d-flex">
                  <input
                    type="text"
                    name ='nom'
                    class="form-control pl-3"
                    placeholder="Search"
                    onChange={this.handleInputChange}
                  />
                  <button
                    type="submit"
                    placeholder=""
                    class="btn btn-secondary search"
                    onClick={this.getsearch}
                  >
                    <span class="fa fa-search"></span>
                  </button>
                </div>



          <tr>
            <th className='pl-5'>Visualiser</th>
            <th>Titre de poste</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody> 
          {this.state.cv.map(cv => (<tr key={cv._id}>
            <td> <Link to ={`/${cv.filep}`}className= "py-2 mr-1"><i class="fa fa-arrow-circle-right pl-5" aria-hidden="true" style={{fontSize: 25}} download></i></Link></td>
            <td>{cv.titre}</td>
            <td>{cv.email}</td>
            <td>

              {' '}
            </td>
          </tr>))}
        </tbody>
      </table>
            </div>
           
        );

    }
}
export default Recherche