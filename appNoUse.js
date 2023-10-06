// for making nested element
//  <div>
//     <div>
//         <h1> hii i m heading h1 tag</h1>
//     </div>
//  </div>
import React from "react";   // we need to import react from react 
import ReactDOM from "react-dom/client"; // we need to import raectDOM from ReactDom


// const parent = React.createElement("div", { id: "parent" }, [
    //     React.createElement("div", { id: "child" }, [
    //         React.createElement("h1", {}, "hii i m heading h1 tag"), React.createElement("h2", {}, " i m h2 tag")]
    //     ), React.createElement("div", { id: "child2" }, [
    //         React.createElement("h1", {}, "hii i m heading h1 tag"), React.createElement("h2", {}, " i m h2 tag")]
    //     )]);
    
    // console.log(parent); //object
    
    // const heading = React.createElement("h1",{id:"heading"},"Hello World from REact js");
const jsxheading = <h1 className="head"> this is namstey react using jsx</h1>
console.log(jsxheading);
 
const Title =()=>(
    <h1 className="title"> this title will be used as component composition</h1>
);

//React functional component

const Headingcomponent = ()=> 
    ( <div id="container">
        <Title/>
        <h1 className="heading">  namatsey react functional component </h1>
    </div>) 

const root = ReactDOM.createRoot(document.getElementById("raja"));
//     // root.render(heading);
root.render(<Headingcomponent/>);