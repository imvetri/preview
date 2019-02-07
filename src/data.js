import style from "./Preview/Preview.css";


let markup = `<input type='text' className={style.box} value={state.name} {...event}/>`;

let state = {
    name: "lalalsdfa"
};

let event = {
        onClick: function a(){console.log('Clicked')},
        onFocus: function a(){console.log("Focussed")}
    };

export {
    markup,
    state,
    event,
    style
}