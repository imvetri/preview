let markup = "<input type='text' value={name}/>";

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