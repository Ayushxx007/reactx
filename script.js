import React from "react";
import ReactDOM from "react-dom/client";

// const div=document.createElement("div");     // Doing same thig by js
// div.id="root";
// document.body.appendChild(div);
// const x=document.getElementById("root");
// const h1=document.createElement("h1");
// h1.innerHTML="hello world from js";
// x.appendChild(h1);



const RestaurantCard=(props)=>{
    console.log(props);
    return (
        <div className="res-card" style={{backgroundColor:"rgb(50,180,100)"}}>
            <img className="res-logo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7"></img>


          <h3>{props.name}</h3>
          <h4>{props.foods}</h4>
          <h4> 3.5 stars </h4>
          <h4>38mins</h4>










        </div>





    );

}



const Body=()=>{
    return(
        <div>
        <div className="search">search</div>
        <div className="res-container">
            <RestaurantCard name="meghna foods" foods="Biryani, cake, salad"/>
            <RestaurantCard name="burger king" foods="cake"/> 
           
            
            </div>
        </div>










    );

}



const Header=()=>{
   return  (
    <div className="header">
        <div className="logo-container">
            <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtHqGBsBCn9uUEAOBuGuZuxFkaeoAgZhGVXg&s"></img>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>cart</li>
                <li>Our Story</li>
 </ul>

        </div>





    </div>


    );



}



const AppLayout=()=>{

    return(
        <div className="app">

            <Header/>
            <Body/>








        </div>


    );

}

const root =ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);






