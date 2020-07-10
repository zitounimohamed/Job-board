import React, { Component } from 'react';
import Pichome from './pichome';
import { Grid, Cell } from 'react-mdl';
import axios from 'axios' ;
import ViewJobs from './society/listjob'
import Services from './services';
class home extends Component {
    constructor(props) {
		super(props);
		this.state = {
			jobs: [],
			title: '',
			lieu : '',
			type : ''
			  };
		this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
	}
	onChangeSearchTitle(e) {
  
		this.setState({
      [e.target.name] : e.target.value
    });
    
	}
	componentWillMount() {
		//this.getsearch();
		this.getsearch(this.state.title,this.state.type,this.state.lieu)
	}
	
	getsearch = async () => {
		
		var raw = JSON.stringify({ title: 'Developpeur full stack' });
		var myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");
		myHeaders.append("Accept", "application/json");
		var requestOptions = {
			method: 'POST',
			body: raw,
			headers: myHeaders,
			redirect: 'follow'
		};
		axios.post("http://localhost:5000/jobs/all", { title: this.state.title , lieu: this.state.lieu, type : this.state.type})
			.then(result => 
				this.setState({
					jobs: result.data
				})
        
				)
			.catch(error => console.log('error', error));
	};
	refreshList() {
		this.getData();
		this.setState({
			currentjob: null,
			currentindex: -1
		});
	}

    render() {
        return (
            <Grid className="pres-grid">
                

            <Cell col={12}>
        
                <Pichome>
                    
                </Pichome>
                <div className="banner-text pt-5">
                <Services></Services>
                </div>
                <div className="banner-text pt-5 pb-5">
                <div style={{  }}>
				<section className="ftco-section bg-light pt-5 pb-5">
					<div className="container">
						<div className="row justify-content-center mb-5 pb-3">
							<div className="col-md-7 heading-section text-center ftco-animate">
								<span className="subheading">Emplois récemment ajoutés</span>
								<h2 className="mb-4">
									<span>Emplois</span> Récents
								</h2>
							</div>
						</div>
						<div className="list row">
							<div className="col md-8" style={{paddingBottom : '60px'}}>
								<form className="search-jobs-form ">
									<div className="row mb-5">
										<div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
											<input
												type="text"
												className="form-control form-control-lg-0"
												name="title"
												placeholder="Titre emploi, clé..."
												onChange={this.onChangeSearchTitle}
												required
											/>
										</div>
										<div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
											<select
												name="lieu"
												className="form-control"
												onChange={this.onChangeSearchTitle}
												required
											>
												<option>N'impote où</option>
												<option value="Ariana">Ariana</option>
												<option value="Béja">Béja</option>
												<option value="Ben Arous">Ben Arous</option>
												<option value="Bizerte">Bizerte</option>
												<option value="Gabès">Gabès</option>
												<option value="Gafsa">Gafsa</option>
												<option value="Jendouba">Jendouba</option>
												<option value="Kairouan">Kairouan</option>
												<option value="Kasserine">Kasserine</option>
												<option value="Kébili">Kébili</option>
												<option value="Le Kef">Le Kef</option>
												<option value="Mahdia">Mahdia</option>
												<option value="La Manouba">La Manouba</option>
												<option value="Médenine">Médenine</option>
												<option value="Monastir">Monastir</option>
												<option value="Nabeul">Nabeul</option>
												<option value="Sfax">Sfax</option>
												<option value="Sidi Bouzid">Sidi Bouzid</option>
												<option value="Siliana">Siliana</option>
												<option value="Sousse">Sousse</option>
												<option value="Tataouine">Tataouine</option>
												<option value="Tozeur">Tozeur</option>
												<option value="Tunis">Tunis</option>
												<option value="Zaghouan">Zaghouan</option>
											</select>
										</div>
										<div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
											<select
												name="type"
												className="form-control"
												onChange={this.onChangeSearchTitle}
												required
											>
												<option>N'impote où</option>
												<option value="temps plein">temps plein</option>
												<option value="demi journée">Demi journée</option>
											</select>
										</div>
										<div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
											<button
												type="button"
												onClick={this.getsearch}
												className="btn btn-primary btn-lg-0  mb-9 btn-block text-white btn-search"
											>
												<span className="icon-search icon mr-2" />Rechercher
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
						<div className="jobs">
							{this.state.jobs !== null &&
								this.state.jobs.map((jobs) => {
									return (
										<ViewJobs
											_id={jobs._id}
											title={jobs.title}
											location={jobs.location}
											type={jobs.type}
											file={jobs.file}
										/>
									);
								})}
						</div>
					</div>
				</section>
			</div>
                </div>


            </Cell>
            
        </Grid>
        );
    }
}

export default home;