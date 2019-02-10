import style from "../Preview/Preview.css";


<<<<<<< HEAD
let markup = `<label id="labelComponent" className={style.box}>{state.name}</label>`;
=======
let markup = `<label className={style.box}>{state.name}</label>`;
>>>>>>> 797846a344e932663d7ff121b8cc0956f5db6182

let state = {
    name: "label component"
};

let LabelComponent = {
    markup: markup,
    state: state,
    style: style,
    events: {},
    children: []
}

export default LabelComponent;