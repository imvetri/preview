import style from "./Preview/Preview.css";


let markup = `<input type='text' className={style.box} value={state.name} {...events}/>`;

let state = {
    name: "lalalsdfa"
};

let events = {
        onClick: function a(e){
            this.setState({
                name: e.target.value
            })
            console.log(e)
        },
        onFocus: function a(){
            console.log("FOSSED_EVENT");
            this.setState({
                name:"Vetri"
            })
        }
    };

export {
    markup,
    state,
    events,
    style
}