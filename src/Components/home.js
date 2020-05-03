import React, { Component } from 'react';
import Pichome from './pichome';
import { Grid, Cell } from 'react-mdl';

import Jobs from '../views/society/jobs';
class home extends Component {
    render() {
        return (
            <Grid className="pres-grid">
                

            <Cell col={12}>
        
                <Pichome>
                    
                </Pichome>
                
                <div className="banner-text">
                <Jobs></Jobs>
                </div>


            </Cell>
            
        </Grid>
        );
    }
}

export default home;