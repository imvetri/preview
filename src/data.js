let markup = "<input type='text' value='podu pattasu'/>";

let state = {
    name: ""
};

let events = {
    onClick: 
`
state.name="vetri"
`
};

let style="";

export {
    markup,
    state,
    events,
    style
}