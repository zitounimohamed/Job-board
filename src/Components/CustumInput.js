import React, { Component } from 'react';

export default class CustumInput extends Component {

    render() {
        const { input: { value, onChange } } = this.props;
        return (
          
            <div class="wrap-input100 validate-input" data-validate = "Enter username">
            <input  class="input100"
                name = {this.props.name}
                id = {this.props.id}
                placeholder = {this.props.placeholder}
                type = {this.props.type}
                value = {value}
                onChange = {onChange}
                
                />
            </div>
        );
    }
}