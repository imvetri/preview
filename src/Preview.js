// Libraries.

import React, { Component } from "react";
import ReactDOM from "react-dom";

import {transform} from "./jsxTranspiler";

class Preview extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        let newElement= transform(this.props.markup);
        
        return (
            <div>
                dei
                {newElement}
            </div>
        );
    }

}

export default Preview;