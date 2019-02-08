// Libraries.

import React, { Component } from "react";
import ReactDOM from "react-dom";

import { transform } from "../jsxTranspiler";

import style from "../Preview/Preview.css";

class DynamicComponent extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.state
        
        Object.keys(this.props.events).forEach(event=>{
            // Get the function name.
            let functionName = this.props.events[event].name;
            // Bind it to current instance and save it.
            this[functionName] = this.props.events[event].bind(this);
            // Also replace in the original events object.
            this.props.events[event] = this[functionName];
        });
    }

    render() {
        let newElement = transform(this.props.markup, this.props.style, this.state, this.props.events);
        return (
            <div className={style.box}>
                dei
                {newElement}
            </div>
        );
    }

}

export default DynamicComponent;