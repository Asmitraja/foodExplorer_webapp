import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error";
import About from "./components/About";
import UserContext from "./utils/UserContext";
import ResturantMenu from "./components/ResturantMenu";
import {ContactUs} from "./components/ContactUs";
import { createBrowserRouter , RouterProvider , Outlet } from "react-router-dom";
// import About from "./components/About";
import  ContactUs  from "./components/ContactUs";
import Shimmer from "./components/Shimmer";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import SignUp from "./components/LoginSignUp";
import Cart from "./components/Cart";
import Carousel from "./components/Carousel";


// import Grocery from "./components/Grocery";
  
//Lazy loading or Code splitting or chunking 
 const Grocery = lazy(()=>import("./components/Grocery"));

 //app layout
const Applayout = ()=>{

    const [userName , setUserName] = useState();
    //authentication
    useEffect(()=>{
        const data = {
            name:"Asmit Dixit",
        };
        setUserName(data.name);
    },[])


    return(
        <Provider store ={appStore} > 
        <UserContext.Provider value={{loggedInUser : userName , setUserName }}>
       <div className="app">
        <Header/>
        <Outlet/> 
        
       </div>
       </UserContext.Provider>
       </Provider>
      
    );
};
const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<Applayout />,
        children:[
            {
                path:"/",
                element:<Body/>,
            },
            {
                path: "/about",
                element:<About />,
            },
            {
                path:"/contactUs",
                element:<ContactUs/>,
            },
            {
                path:"/grocery",
                element: <Suspense fallback={<h1>Loading</h1>} > <Grocery/></Suspense>,
            },
            {
                path:"/cart",
                element:<Cart/>,
            },
            {
                path:"/resturants/:resId",
                element:<ResturantMenu/>,
            },
            {
                path:"/signup",
                element:<SignUp/>,
            }
        ],
        errorElement:<Error/>,
    },
   
]);


const root = ReactDOM.createRoot(document.getElementById("raja"));
root.render(<RouterProvider router={appRouter} />);