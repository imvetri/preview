// Libraries.

import React, { Component } from "react";
import ReactDOM from "react-dom";

import Preview from "./Preview/Preview";


import {state, markup, style, events} from "./data";

ReactDOM.render(<Preview markup={markup} style={style} events={events} state={state}/>, document.getElementById("index"));
