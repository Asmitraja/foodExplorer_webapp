import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import SignUp from "./LoginSignUp";
import online  from  "../utils/icons8-wifi-64.png";
import offline from "../utils/icons8-wi-fi-off-50.png"
import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/contants";
import { Link } from "react-router-dom";
import { Provider, useSelector } from "react-redux";


export const Header = () => {
  // let login = "Login"; We cant make it dynamic by using normal variable so we have to use React useState variable
  const [btnNameReact, setbtnNameReact] = useState("LogIn");
  const onlineStatus = useOnlineStatus();

  // UserContext can be used by UseContext hook . simply passing UserContext in my useContext hook
   const {loggedInUser} = useContext(UserContext);
  
   console.log(loggedInUser);
   // subscribing to the store using selector
   const cartItems = useSelector((store)=>store.cart.items);
   console.log(cartItems);

  return (
    <nav className="flex border border- border-black  shadow-xl justify-around  ">
      <div>
        <img className="w-28 p-3 " src={LOGO_URL} />
      </div>
      <div className=" my-auto   ">
        <ul className="flex ">
          <li className="w-8 mr-5 ">
             {onlineStatus ? <img src={online}/> : ( <img src={offline}/> )}
          </li>
          <li className="mx-3 text-2xl font-semibold hover:scale-105  ">
            {
              <Link className="linkstyle hover:text-sky-500 " to="/">
                Home 
              </Link>
            }
          </li>
          <li className="mx-3 text-2xl font-semibold hover:scale-105">
            <Link className="linkstyle hover:text-sky-500" to="/contactUs">
              ContactUs
            </Link>
          </li>
          <li className="px-3 text-2xl font-semibold hover:scale-105"> <Link className="hover:text-sky-500" to="/Cart"> Cart -({cartItems.length}) </Link> </li>
          <li className="mx-3 text-2xl font-semibold hover:scale-105">
            <Link className="linkstyle hover:text-sky-500  " to="/about">
              AboutUs
            </Link>
          </li>
          <li className="mx-3 text-2xl font-semibold hover:scale-105">
            {" "}
            <Link className=" linkstyle hover:text-sky-500" to="/grocery">
              {" "}
              Grocery
            </Link>
          </li>
        
          
         <Link to="/signup">
          <button
            className="text-white bg-blue-700 hover:bg-blue-800 ml-2 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={() => {
              btnNameReact == "LogOut"
                ? setbtnNameReact("LogOut")
                : setbtnNameReact("LogIn");
            
            }}

              // setbtnNameReact("Logout")  ;
              // if(btnNameReact=="Logout"){
              //     setbtnNameReact("Login");}
              // console.log(btnNameReact);}
          >
            {btnNameReact}
            
          </button> </Link>
          <li className="mx-3 text-xl font-semibold font-serif mt-1">{loggedInUser}</li>
        </ul>
      </div>
    </nav>
    
  );
};
export default Header;
