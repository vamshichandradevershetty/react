//creating div with parent and adding another div as child and h1 element in child

const parent = React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child"},[
        React.createElement("h1",{id:"h1tag"},"hello from inside the div tags"),
    React.createElement("h2",{id:"h2tag"},"Iam an h2 tag")]),
    React.createElement("div",{id:"child2"},[
        React.createElement("h1",{id:"h1tag"},"hello from inside the div tags"),
    React.createElement("h2",{id:"h2tag"},"Iam an h2 tag")])

])




//const heading1 = React.createElement("h2",{id:"heading"},"hello from react");

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("div1"));
root.render(parent);

