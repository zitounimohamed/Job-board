import React, { Component } from 'react';
import './forma.css'
class listFormation extends Component {
    render() {
        return (
            <div className='container'>
                <br/><br/><br/><br/>
                <center><h2>Listes des formations</h2></center>
                <ul className="list-group pt-5">
                    <li className="list-group-item">
                        <div className="row">
                            <div className="col-1 vl">
                                <img src='' alt=''/>
                            </div>
                            <div className="col-9 vl">
                            
                            </div>
                            <div className="col vl pr-5">
                                <button className='btn btn-primary'>Plus details</button>
                            </div>
                        </div>
                        
                    </li>
                    <li className="list-group-item">Dapibus ac facilisis in</li>
                    <li className="list-group-item">Morbi leo risus</li>
                    <li className="list-group-item">Porta ac consectetur ac</li>
                    <li className="list-group-item">Vestibulum at eros</li>
                </ul>
            </div>
        );
    }
}

export default listFormation;