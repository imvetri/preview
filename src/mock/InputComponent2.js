import style from "../Preview/Preview.css";


let markup = `<input type='text' className={style.box} value={state.name} {...events}/>`;

let state = {
    name: "lalalsdfa"
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
    style: style
}

export default InputComponent2;