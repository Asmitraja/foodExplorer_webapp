import ItemListMenu from "./ItemListMenu";
import { clearCart } from "../utils/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/contants";
import { useState } from "react";
import { addItem } from "../utils/cartSlice";
import { removeItem } from "../utils/cartSlice";

const Cart = () => {
  const [OrderPlaced, setOrderPlaced] = useState(false);

  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setOrderPlaced(true);
    setTimeout(() => {
      dispatch(clearCart());
      <Link to="/"></Link>;
    }, 3000);
  };


  const handleclick = () => {
    dispatch(clearCart());
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.card.info.id));
  };

  const handleAdd = (item) => {
    dispatch(addItem(item));
  };

  // const CartItems = useSelector((store) => store.cart.items);
  // console.log(CartItems);
  // console.log("HI");

  let totalPrice = 0;
  cartItems.forEach((item) => {
    const itemPrice =
      item.card.info.price / 100 || item.card.info.defaultPrice / 100;
    totalPrice += itemPrice * item.quantity;
  });

  
  if (cartItems.length === 0)
    return (
      <div>
        <div className="flex justify-center m-3">
          {" "}
          <Link to="/">
            {" "}
            <button className="bg-blue-500 hover:bg-blue-400 text-white py-2 px-2  border-b-4 border-blue-700 hover:border-blue-500 rounded">
              Find a Restaurant
            </button>{" "}
          </Link>{" "}
        </div>
        <img
          className="w-[70%] m-auto  "
          src={
            "https://raw.githubusercontent.com/hemshushivhare/Meal-dash/main/src/components/images/empty%20cart.png"
          }
        />
      </div>
    );

  return (
    <div>
      {OrderPlaced ? (
        <div className=" h-screen flex justify-center items-center text-center">
          <div className="text-green-600 font-semibold mb-4 text-2xl">
           
            Wao ! Your order has been Placed Successfully 😋🤩
          </div>
        </div>
      ) : (
        <div className=" w-5/12 mx-auto m-5 p-5">
          <div className="flex justify-around  ">
            {" "}
            <h1 className="font-bold text-2xl mb-1 ml-32 ">
              {" "}
              Your Cart{" "}
            </h1>
          <div className="">       <button
              onClick={handleClearCart}
              class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
            >
              <span class="relative px-4 py-1.5 transition-all ease-in duration-1 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                CLearCart
              </span>
            </button> </div>
          </div>
          {/* <div className="w-5/12 m-auto "> */}

          {/* 
            <h1 className="mt-8">Your Cart Is Empty . Add something </h1> </div>} */}
          {/* <ItemListMenu items={cartItems} /> */}

          {/* </div> */}
          {cartItems.map((item) => (
            <div className="">
              <div className=" flex justify-center" key={item.card.info.id}>
                <div className=" border-gray-200 border-b-2 gray py-2   mt-7">
                  <div className="flex">
                    <div className="w-9/12">
                      <span className="mt-4 text-lg font-semibold">
                        {item.card.info.name}
                      </span>
                      <p className="text-lg font-semibold text-green-500">
                        -₹
                        {item.card.info.price
                          ? item.card.info.price / 100
                          : item.card.info.defaultPrice / 100}
                      </p>
                    </div>

                    <div className="w-3/12">
                      <div className="absolute mt-[70px]">
                        <div>
                          <button className=" mx-14 w-20  bg-white text-green-500 font-bold px-4 flex space-x-2 border rounded-sm">
                            <span
                              className="remove-item-btn text-xl font-bold"
                              onClick={() => handleRemove(item)}
                            >
                              -
                            </span>
                            <span>{item.quantity}</span>

                            <span
                              className="add-item-btn text-xl font-bold"
                              onClick={() => handleAdd(item)}
                            >
                              +
                            </span>
                          </button>
                        </div>
                      </div>
                      {item.card.info.imageId ? (
                        <img
                          className="rounded-lg shadow-md  ml-10"
                          src={
                            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
                            item.card.info.imageId
                          }
                        ></img>
                      ) : (
                        <img className="rounded-lg shadow-md w-2/3 ml-10"></img>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

        <div className="p-3">   <h1 className="text-xl font-semibold underline text-center"> Bill details</h1>
          <h1 className="flex justify-evenly ">Item Total =<span> ₹ {totalPrice}</span></h1>
          <h1 className="flex justify-evenly text-sm">Delivery Fee =<span>₹ 21</span></h1>
          <h1 className="flex justify-evenly text-sm">GST & Resto Charges =<span>₹ {totalPrice*12/100}</span></h1> </div>
          <hr className="border border-black"/>
          <h1 className="flex justify-end text-xl p-3" > TO PAY  &nbsp; = &nbsp;&nbsp;&nbsp; <span className="text-green-600">₹ {totalPrice + 21 + totalPrice*12/100}</span></h1>
            <div className="flex justify-between"> <div> <Link to="/"><button className=" bg-blue-600 text-center px-2 text-white py-2 rounded-md">back to Restaurant</button> </Link>   </div> 
               <div><button className=" bg-blue-600 text-center px-2 text-white py-2 rounded-md" onClick={(handleSubmit)}>Placed Order </button> </div>
                 
             </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
