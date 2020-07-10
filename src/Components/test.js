import React, { Component } from 'react';

class test extends Component {
    render() {
        console.log("test",this.props.myProp);
        
        return (
            <div>
                <div>{this.props.myProp}</div>   
            </div>
        );
    }
}

export default test;