import React, { Component } from 'react';
import Pichome from './pichome';
import { Grid, Cell } from 'react-mdl';

import Listjob from './society/listjob';
class home extends Component {
    render() {
        return (
            <Grid className="pres-grid">
                

            <Cell col={12}>
        
                <Pichome>
                    
                </Pichome>
                
                <div className="banner-text">
                <Listjob></Listjob>
                </div>


            </Cell>
            
        </Grid>
        );
    }
}

export default home;