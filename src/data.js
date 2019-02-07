import style from "./Preview/Preview.css";

let markup = "<input type='text' className={style.box} value='podu pattasu'/>";

let state = {
    name: ""
};

let events = {
    onClick: 
`
state.name="vetri"
`
};

export {
    markup,
    state,
    events,
    style
}