/**
 * <div id="parent">
    <div id="child">
    <h1>I am h1</h1>
    </div>
</div>
 */

// React.createElement("tag" , {obj --> contain id's} , children)

const parent = React.createElement("div" , {id:"parent"} , 
    React.createElement("div", {id:"child"} ,
        React.createElement("h1" , {} , "I am h1")
    )
);


const heading = React.createElement(
    "h1" ,
     {id:"heading"} ,
    "Hello World from React!!"
);

console.log(heading); //-> this will console an object

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
root.render(parent);
