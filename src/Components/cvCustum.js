import React, { Component } from 'react';

export default class cvCustum extends Component {

    render() {
        const { input: { value, onChange } } = this.props;
        return (
            
                <input class="form-control"
                name = {this.props.name}
                id = {this.props.id}
                placeholder = {this.props.placeholder}
                type = {this.props.type}
                value = {value}
                onChange = {onChange}
                />
            
                
            
        );
    }
}
