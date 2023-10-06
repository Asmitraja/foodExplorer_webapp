import { useContext } from "react";
import {CDN_URL} from "../utils/contants";
import UserContext from "../utils/UserContext";
import locationsvg from "../utils/location-sign-svgrepo-com.svg";
import starsvg from "../utils/1930255_galaxy_green_star_icon.svg";
import deliverysvg from "../utils/fast-food-delivery-bike-12991.svg";
// import {CDN_URL} from "../utils/contants"; 
const ResturantCard = (props)=>{
    // console.log(props);
    const {resData} = props;
    const {loggedInUser} = useContext(UserContext);
    return(
        <div className="resturantCard   p-5 w-[270px] h-[380px] bg-slate-300 rounded-xl hover:scale-105 delay-100 hover:bg-slate-400 hover:border-1	border-gray-950">
       <div className=" "> 
       <div className="absolute mt-32 p-2 ml-5 text-lg font-semibold text-white rounded-full bg-slate-500 
        
       } "> {resData.info.aggregatedDiscountInfoV3 && (
  <>
    <h4 className="">{resData.info.aggregatedDiscountInfoV3.header}
    {resData.info.aggregatedDiscountInfoV3.subHeader}</h4>
  </>
)} </div>
      <div className=" shadow-lg rounded-lg shadow-black"> <img className="cardimage ab m-auto w-[250px] h-[152px] rounded-lg " src={  CDN_URL + resData.info.cloudinaryImageId } /> </div>
       
     

        </div> 
         <h2 className="font-extrabold font-serif text-xl line-clamp-1 mt-6 ml-"> {resData.info.name} </h2>
         <h4 className="font-light line-clamp-1 p-1 text-base  " >{resData.info.cuisines.join(" ,")}</h4>
         <h4 className="flex ml-1"> <img className="h-6 w-5 " src={starsvg}/>  &nbsp; {resData.info.avgRating} </h4>
         <h4 className="font-semibold ml-2 font-sans"> {resData.info.costForTwo}</h4>
         <h4 className="flex "> <img className="h-6 w-6 " src={locationsvg}/> {resData.info.areaName} </h4>
          <h5 className="flex "> <img className="h-6 w-6 " src={deliverysvg}/>&nbsp; {resData.info.sla.deliveryTime} mints</h5> 
         
         {/* <h5 className="font-semibold"> User : {loggedInUser}</h5> */}
        </div>
    )
 }
 export default ResturantCard;

