// div ye ek html element nahi hai but it is a Reactelement or we can say that it is a Javascript object.
// ye propes contain karta hai , means ye attribute or child contain kart ahia ,
//React.createElement ek html tag nahi bnata hai ye object ko create karta hai jo ki pass hota hai rendermethod mei or fir wo us object ko ek div tag mei convert kar deta hai brower ko samjhane ke liye and then wo fir humare DOM pe manipulate hota hai.



/*** if we want to create this type of html structure
 * <div id="parent">
 * <div id ="heading">
 * <h1 id="head"></h1>
 * </div>
 * </div>



 */
/****
 * 
 * const div = React.createElement("div",{id:"parent"} ,React.createElement("div" ,{id:"heading"},React.createElement("h1", {id:"head"}, "hello React  INDIA lovers")));
console.log(div);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(div);
 */



/*** if we want to create a nested structure in react so we can write 
 * if hum isme h1 mei ek aur  h2 tag (sibling)  create karna chate hai to react mei ase create krenge
 * 
 * <div id="parent">
 * <div id ="heading">
 * <h1 id="head">
 * <h2 id = "heading2"></h2>
 * </h1>
 * </div>
 * </div>

agr hume same level per elemnt ko bnana hota hai to hum use array mei convert kar dete hai 

 */


/****
 * const div = React.createElement("div",{id:"parent"} ,React.createElement("div" ,{id:"heading"},[ React.createElement("h1", {id:"head"}, "hello React  INDIA lovers") ,React.createElement("h1", {id:"head"}, "hello React  INDIA2 lovers") ]));
console.log(div);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(div);
 */


/**
 * <div id="parent">
 * <div id ="heading">
 * <h1 id="head">
 * <h2 id = "heading2"></h2>
 * </h1>
 * </div>
 * 
 * <div id ="heading12">
 * <h1 id="head2">
 * <h2 id = "heading12"></h2>
 * </h1>
 * </div>
 * 
 * 
 * </div>
 */




/* Agr ek div ke do child hai h1 and h2 then we have to pass them into an array*/
import React from "react";
import reactDOM from "react-dom/client"
const div = React.createElement("div",{id:"parent"} ,[React.createElement("div" ,{id:"heading"},[ React.createElement("h1", {id:"head"}, "hello React  INDIA lovers") ,React.createElement("h1", {id:"head"}, "hello React  INDIA2 lovers") ]),

React.createElement("div" ,{id:"heading"},[ React.createElement("h1", {id:"head"}, "hello React  INDIA lovers") ,React.createElement("h1", {id:"head"}, "hello Namste javascript 🚀") ])
]);
console.log(div);
const root = reactDOM.createRoot(document.getElementById("root"));
root.render(div);