import style from "../Preview/Preview.css";


let markup = `<label className={style.box}/>{state.name}}</label>`;

let state = {
    name: "label component"
};

let LabelComponent = {
    markup: markup,
    state: state,
    events: {},
    children: []
}

export default LabelComponent;