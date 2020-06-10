import React, { Component } from 'react';
import axios from 'axios'
import './postjob.css'
class Modify extends Component {
    constructor(props){
        super(props);
        this.state={
            data :'',
            email : null,
            title : null,
            location: null,
            region : null,
            type :  null,
            description : null,
            company_name : null,
            tagline :  null,
            cDisc : null,
            site : null,
            file : null
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.onChange=this.onChange.bind(this)

    }
   
     
    handleInputChange = (event) =>{
        this.setState({
            
            [event.target.name] : event.target.value,
            
        })
    }
    async componentDidMount(){
        const {id} = this.props.match.params
        console.log('id',id);
        
        await axios.get(`http://localhost:5000/jobs/${id}`)

      .then(( response ) => {
        if(response.status===200 && response!= null )
        {
          this.setState({data : response.data})
        }
       
      })
    }
     async update(id,event){
        event.preventDefault();

       let uri =`http://localhost:5000/jobs/update/${id}` ;
       
        const data={
            [event.target.name] : event.target.value
        }
       await axios.post(uri,data).then((response)=>{
           console.log(response);
           const {history} = history.push('/home')
       }).catch(error =>{
           console.log(error);
           
       }); 

    }
    onChange = (e) => {
        this.setState({file: e.target.files[0]})
    }

    


    render() {
        console.log(this.state.data);
        
        return (
            <div>
            <div className='container' id ='cont'>
                <h2 className='tit'>Modifier un emploi</h2>
                    <form className= "p-5 p-md-5 border rounded" onSubmit={this.handleSubmit}>
                      <h2 className='bigtitle'>Détails de l'emploi</h2><hr/>
                        
                        <div class='form-group pt-3'>
                            <label for="exampleFormControlFile1" className='lab pb-3'>Email :</label>
                            <input class="form-control" type="text" value={this.state.data.email} placeholder="Exemple@exemple.com" name="email" id="email" onChange={this.handleInputChange}/>
                        </div>
                        <div class='form-group pt-3'>
                            <label for="exampleFormControlFile1" className='lab pb-3'>Titre de l'emploi :</label>
                            <input class="form-control" type="text" value={this.state.data.title} placeholder="Product Designer" name="title" id="title" onChange={this.handleInputChange}/>
                        </div>
                        <div class='form-group pt-3'>
                            <label for="exampleFormControlFile1" className='lab pb-3'>Location :</label>
                            <input class="form-control" type="text" value={this.state.data.location}  placeholder="Tunis" name="location" id="location" onChange={this.handleInputChange}/>
                        </div>
                        <div class='form-group pt-3'>
                            <label for="exampleFormControlFile1" className='lab pb-3'>Region :</label>
                            <input class="form-control" type="text" placeholder="Tunis"  value={this.state.data.region}  name="region" id="region" onChange={this.handleInputChange}/>
                        </div>
                        <div class='form-group pt-3'>
                            <label for="exampleFormControlFile1" className='lab pb-3'>Type de l'emploi :</label>
                            <input class="form-control" type="text" value={this.state.data.type}  placeholder="Type de l'emploi" name="type" id="type" onChange={this.handleInputChange}/>
                        </div>
                        <div class='form-group pt-3 pb-5'>
                            <label for="exampleFormControlFile1" className='lab pb-3'>Déscription :</label>
                            <textarea rows ="10" class="form-control" type="text"  value={this.state.data.description}  placeholder="Décrire l'emploi" name="description" id="description" onChange={this.handleInputChange}/>
                        </div>
                        <h2>Détails de l'emploi</h2><hr/>
                        <div class='form-group pt-5'>
                            <label for="exampleFormControlFile1" className='lab pb-3'>Nom de votre société :</label>
                            <input class="form-control" type="text" value={this.state.data.company_name} placeholder="nom d'entreprise" name="company_name" id="company_name" onChange={this.handleInputChange}/>
                        </div>
                        <div class='form-group pt-3'>
                            <label for="exampleFormControlFile1" className='lab pb-3'>Slogan :</label>
                            <input class="form-control" type="text"  value={this.state.data.tagline} placeholder="Slogan" name="tagline" id="tagline" onChange={this.handleInputChange}/>
                        </div>
                        <div class='form-group pt-3'>
                            <label for="exampleFormControlFile1" className='lab pb-3'>Déscription de société :</label>
                            <textarea rows ="10" class="form-control" value={this.state.data.cDisc} type="text" placeholder="Décrire le société" name="cDisc" id="cDisc" onChange={this.handleInputChange}/>
                        </div>
                        <div class='form-group pt-3'>
                            <label for="exampleFormControlFile1" className='lab pb-3'>Site Web :</label>
                            <input class="form-control" type="text"value={this.state.data.site}  placeholder="https://" name="site" id="site" onChange={this.handleInputChange}/>
                        </div>
                        <div class='row pt-5'>
                        <button type='submit' class='btn btn-primary btn-lg ' id='but' >Publier</button>
                        </div>
                    </form>
                
            </div>
            </div>
        );
    }
}

export default Modify;