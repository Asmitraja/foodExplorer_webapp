import { useState } from "react";
import ItemListMenu from "./ItemListMenu";

const ResturantCategoryMenu = ({ data , showItems ,setShowindex}) => {
 
  //  ( ye sb mai phle use kr rha tha . now i have added a new property that is lifting the state up .  ye jo maine comment out ki hai isse sare categories ek sth click ho jati thi . matlb mai menu ki categories more than one ek sth open kr skta hu . but ab mai ise hata rha hu to learn the controlled and uncontrolled components)
    // const[showItems,setShowItems]=useState(false);
   const handleClick = ()=>{
       
        setShowindex (); 
       
       };
      
     
  return (
    <div>
      {/* Header */}
      <div className="  w-[60%] mx-auto shadow-md my-3 p-3  ">
        <div className="flex justify-between shadow-sm p-2 cursor-pointer " onClick={handleClick}>
          {" "}
          <span className="relative font-bold  ml-3">
            {data.title} ({data.itemCards.length})
          </span>
          <span className="">⬇️</span>
          </div>
          {/* Accordian Body */}
          {  showItems && <ItemListMenu items={data.itemCards} /> }
        
      </div>
      
    </div>
  );
};

export default ResturantCategoryMenu;
