import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/contants";


 const useRestaurantMenu = (resId) => {
    const [resInfo , setResInfo] = useState(null);
    //fetch data
     useEffect(()=>{
        fetchData();
     },[]);
    
      const fetchData = async ()=>{
            const data = await fetch( MENU_URL + resId );
            const json = await data.json();
            setResInfo(json.data);
      };
    return resInfo;
 };
 export default useRestaurantMenu;