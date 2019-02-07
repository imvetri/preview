// Libraries.

import React, { Component } from "react";
import ReactDOM from "react-dom";

import Preview from "./Preview/Preview";


import {state, markup, style, event} from "./data";

ReactDOM.render(<Preview markup={markup} style={style} event={event} state={state}/>, document.getElementById("index"));
