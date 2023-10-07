 

import { CDN_URL } from "../utils/contants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { useState } from "react";

const ItemListMenu = ({ items }) => {
  //   console.log(items);
  const [itemincart , setItemincart ] = useState(false);
  const dispatch = useDispatch();
  const handleAddItem = (itemMenu)=>{
    // Dispatch an action
    setItemincart(true);
    dispatch(addItem (itemMenu));
  };
  
  return (
    <div>
      {items.map((itemMenu) => (
        <div
          key={itemMenu.card.info.id}
          className="border-b-2 border-b-gray-200"
        >
          {" "}
          <div>
            <div className="text-left m-2 flex justify-between  ">
              <div className="w-9/12">
                {" "}
                <div className="text-lg  ">{itemMenu.card.info.name}</div>
                <div className="  font-light">
                  ₹{" "}
                  {itemMenu.card.info.price
                    ? itemMenu.card.info.price / 100
                  : itemMenu.card.info.defaultPrice / 100}
                </div>
                <p className=" text-xs my-3">
                  {itemMenu.card.info.description}
                </p>
               
              </div>
              <div className="w-[17%]">
                <button className=" w-20 h-[40px] mr-5 rounded-lg text-green-500  bg-white absolute mt-[95px] hover:bg-blue-50" 
                onClick={()=> {handleAddItem(itemMenu);
                   }  }>
                 
                  Add +{" "}
                </button>
               
                <img
                  className="w-40 rounded-md shadow-lg h-32"
                  src={CDN_URL + itemMenu.card.info.imageId}
                />
              </div>
            </div>
            <div className="m-6 "></div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemListMenu;
