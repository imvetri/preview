import style from "../Preview/Preview.css";
import labelComponent from "./LabelComponent";

<<<<<<< HEAD
let markup = `<input type='text' id="secondInput" className={style.box} value={state.name} {...events}/>`;
=======
let markup = `<input type='text' className={style.box} value={state.name} {...events}/>`;
>>>>>>> 797846a344e932663d7ff121b8cc0956f5db6182

let state = {
    name: "Second Component"
};

let events = {
    onChange: function a(e) {
        this.setState({
            name: e.target.value
        })
    },
    onFocus: function a() {
        console.log("FOCUSSED_EVENT");
        this.setState({
            name: "Second Component"
        })
    }
};

let InputComponent2 = {
    markup: markup,
    state: state,
    events: events,
    style: style,
    children: [labelComponent]
}

export default InputComponent2;