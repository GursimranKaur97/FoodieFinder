import React from 'react';
import ReactDOM from "react-dom/client"

// React Element
// React.createElement => Object => HTMLElement(render) when we render this to DOM it becomes HTML elemant
// const heading = React.createElement("h1", {id: "heading"}, "Namaste React");

// JSX is not HTML in Javascript, it's an HTML like syntax, If we're wtiting jsx in multiple lines we need to wrap those in brackets
// JSX => Babel transpiles it to React.createElement => ReactElement- JS Object => HTMLElement(render)
// const jsxHeading = <h1 className='head' tabIndex="1">Namaste React using JSX</h1>

// React Element
// const heading = (
// <h1 className='head' tabIndex="1">
//     Namaste React using JSX
// </h1>)


const Title = () => (
    <h1 className='head' tabIndex='5'>
        Namaste React using JSX
    </h1>
)
// React Component ->// 1) Class Based Component(OLD) 2)Functional Component(NEW)

const number = 1000;
// React Functional Component - > It's a normal javascript fxn that returns a jsx code or react elements
// Component Composition (call one component inside another)
const HeadingComponent = () => (
    <div id='container'>
        <h2>{number}</h2>
        <Title />
        <Title></Title>
        {Title()}
    <h1 className='heading'>Namaste React Functional Component</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading); // Render react element
root.render(<HeadingComponent />); //Render react component

// const parent = React.createElement(
//     "div", {id: "parent"}, 
//     [React.createElement("div", {id: "child1"}, [
//          React.createElement("h1", {id: "heading"}, "I'm an h1 tag"),
//          React.createElement("h2", {}, "I'm an h2 tag")
//         ]
//     ),
//     React.createElement("div", {id: "child2"}, [
//          React.createElement("h1", {id: "heading"}, "I'm an h1 tag"),
//          React.createElement("h2", {}, "I'm an h2 tag")
//         ]
//     )
//     ]
// )

// // const heading = React.createElement(
// //     "h1", 
// //     {id: "heading"}, // attributes of the object
// //      "Hello World from React!");

// const root = ReactDOM.createRoot(document.getElementById("root"));
// // root.render(heading);
// root.render(parent); //ReactElement(Object) => HTML(Browser Understands)