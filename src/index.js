// Libraries.

import React, { Component } from "react";
import ReactDOM from "react-dom";

import Preview from "./Preview/Preview";


import InputComponent1 from "./mock/InputComponent1";
import InputComponent2 from "./mock/InputComponent2";

let Components = [InputComponent1, InputComponent1];

ReactDOM.render(<Preview 
                    components={Components}
                />, document.getElementById("index"));
