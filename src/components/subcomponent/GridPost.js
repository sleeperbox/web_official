import React, { Component } from "react";

export default class GridPost extends Component {

    constructor(props) {
        super(props);
        this.state = {
           
        };
    }

    render () {
        const grid = {
            height: 504,
        } 
     
        
        return (
        <div style={grid}>
            <p>ini adalah grid kiri</p>
        </div>
        );
    }


}