import React, { Component } from 'react';

export default class Private extends Component {

    render() {
        const { textarea: { value, onChange } } = this.props;
        return (
            <textarea class="form-control" 
                    name = {this.props.name}
                    id = {this.props.id}
                    placeholder = {this.props.placeholder}
                    type = {this.props.type}
                    value = {value}
                    onChange = {onChange}
                />
        )
    }
}