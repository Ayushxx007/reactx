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

const heading =React.createElement("div",{id:"parent"},"mahika");  // CREATING AN REACT ELEMENT WITH ID = PARENT 

const root =ReactDOM.createRoot(document.getElementById("root"));  //  CREATING A ROOT ELEMENT WHERE EVERYTHING IS RENDERERD

root.render(heading);   // 

// this is very heptic so JSX Comes in Picture
// HTML like syntax in js 

const Mahika=()=><p>Mhai ccc dcccka</p>;

const reactElement=<h1>mahak</h1> ;    //
root.render(reactElement); //
let n=1000;

const ReactComponent=()=>(

    <div id="container">

       

      <Mahika/>

     



<h1>mahika singh</h1>
    </div>);

   

root.render(<ReactComponent/>); //


