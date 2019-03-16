
import React, { Component } from "react";
import Form from './form/Form';

export default class GridForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
           
        };
    }

    render () {
        
        const grid = {
            height: 650,
        } 
        return (
        <div style={grid}>
            <h1>WAY</h1>
            <p>Sign Up or Log in</p>
            <Form/>
        </div>
        );
    }


}