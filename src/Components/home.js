import React, { Component } from 'react';
import Pichome from './pichome';
import { Grid, Cell } from 'react-mdl';

import Jobs from '../views/society/jobs';
import Services from './services';
class home extends Component {
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
                <Jobs></Jobs>
                </div>


            </Cell>
            
        </Grid>
        );
    }
}

export default home;