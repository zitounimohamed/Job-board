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
	totalJobs = async ()=>{
		axios.get("http://localhost:5000/jobs/count")
		.then((response)=>{
			this.setState({
				
			})
		})
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