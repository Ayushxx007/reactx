import React from "react";
import ReactDOM from "react-dom/client";

// const div=document.createElement("div");     // Doing same thig by js
// div.id="root";
// document.body.appendChild(div);
// const x=document.getElementById("root");
// const h1=document.createElement("h1");
// h1.innerHTML="hello world from js";
// x.appendChild(h1);




// same thing by react


const heading=React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},React.createElement("h1",{},[React.createElement("p",{},"nimbu"),React.createElement("p",{},"simba")]) ) );     // Creating react element

 const root=ReactDOM.createRoot(document.getElementById("root"));   // creating react root element 

 root.render(heading);          // rendering stuff into react root element