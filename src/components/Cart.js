import ItemListMenu from "./ItemListMenu";
import { clearCart } from "../utils/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/contants";

const Cart = ()=>{
const cartItems = useSelector((store)=> store.cart.items);

const dispatch = useDispatch();
const handleClearCart = ()=>{
    dispatch(clearCart());
}
    return <div className="text-center m-5 p-5">
      <div className="flex justify-evenly ">  <h1 className="font-bold text-2xl mb-1 flex justify-center ml-[350]" > Your Cart </h1>
        <button onClick={handleClearCart} 
        class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
  <span class="relative px-4 py-1.5 transition-all ease-in duration-1 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      CLearCart
  </span>
</button> </div>
        <div className="w-5/12 m-auto ">
       
            {/* 
            <h1 className="mt-8">Your Cart Is Empty . Add something </h1> </div>} */}
            <ItemListMenu items={cartItems} />
        </div>
        {cartItems.length ===0 && 
            <div>
        <img className="w-[70%] m-auto  " src={"https://raw.githubusercontent.com/hemshushivhare/Meal-dash/main/src/components/images/empty%20cart.png"}
         /> 
        <Link to="/" > <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" >Find a Restaurant</button> </Link>
      </div> }
    </div> 
}
export default Cart;
