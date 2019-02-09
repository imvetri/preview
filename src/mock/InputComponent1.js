import style from "../Preview/Preview.css";


let markup = `<input type='text' className={style.box} value={state.name} {...events}/>`;

let state = {
    name: "First Component"
};

let events = {
    onClick: function a(e) {
        this.setState({
            name: e.target.value
        })
        console.log(e)
    },
    onFocus: function a() {
        console.log("FOCUSSED_EVENT");
        this.setState({
            name: "First Component"
        })
    }
};

let InputComponent1 = {
    markup: markup,
    state: state,
    events: events,
    style: style,
    children: []
}

export default InputComponent1;