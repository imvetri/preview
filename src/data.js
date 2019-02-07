import style from "./Preview/Preview.css";

let markup = "<input type='text' className={style.box} value={state.name}/>";

let state = {
    name: "lalalsdfa"
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