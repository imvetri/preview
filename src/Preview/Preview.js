// Libraries.

import React, { Component } from "react";
import ReactDOM from "react-dom";

import {transform} from "../jsxTranspiler";

import style from "./Preview.css";

class Preview extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        let newElement = transform(this.props.markup, style);
        
        return (
            <div className={style.box}>
                dei
                {newElement}
            </div>
        );
    }

}

export default Preview;