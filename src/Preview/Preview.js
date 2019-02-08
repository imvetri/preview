// Libraries.

import React, { Component } from "react";
import ReactDOM from "react-dom";


import style from "./Preview.css";

import DynamicComponent from "../DynamicComponent/DynamicComponent";

class Preview extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className={style.box}>
                <DynamicComponent markup={this.props.markup} style={this.props.style} events={this.props.events} state={this.props.state}/>
            </div>
        );
    }

}

export default Preview;