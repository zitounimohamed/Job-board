import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
class listJSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
    };
  }

  getsearch() {
    const title = this.props.match.params.title;
    const lieu = this.props.match.params.lieu;
    const type = this.props.match.params.type;

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Accept", "application/json");
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      redirect: "follow",
    };
    axios
      .post("http://localhost:5000/jobs/all", {
        title: title,
        lieu: lieu,
        type: type,
      })
      .then((result) =>
        this.setState({
          jobs: result.data,
        })
      )
      .catch((error) => console.log("error", error));
  }
  async componentDidMount (){
    await this.getsearch()
  }

  render() {
    return (
      <div style={{ paddingTop: 60 }}>
				<section className="ftco-section bg-light pt-5 pb-5">
					<div className="container">
						<div className="row justify-content-center mb-5 pb-3">
							<div className="col-md-7 heading-section text-center ftco-animate">
								<span className="subheading">Résultat de votre recherche</span>
								<h2 className="mb-4">
									<span>Emplois</span> Récents
								</h2>
							</div>
						</div>
        {this.state.jobs !== null &&
          this.state.jobs.map((jobs) => {
            return (
              <div className="container">
				
				<div className="row pt-3">
					<div className="col-md-12 ftco-animate">

            <div className="job-post-item bg-white p-4 d-block d-md-flex align-items-center ">

              <div className="mb-4 mb-md-0 mr-5">
                <div className="job-post-item-header d-flex align-items-center">
                  <h3 className="mr-3 text-black h3" >
                  {jobs.title}  
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
              </div>
            </div>
          </div>
          </div>
          
           
          
          </div>
            );
          })}
      </div>
      </section>
      </div>
    );
  }
}

export default listJSearch;