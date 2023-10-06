import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ResturantCategoryMenu from "./ResturantCategoryMenu";
import { useState } from "react";

const ResturantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);
  const [showIndex , setShowIndex] = useState(null);
  const { resId } = useParams();
  // console.log(params); (This params hook provides us the id of the resturants )

  const resInfo = useRestaurantMenu(resId);
  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch( MENU_URL + resId ); // We have written all this comment code inside our custom hook so that we can optimize our code. and follow the single responsibility priciple .
  //   const json = await data.json();
  //   console.log(json);
  //   setResInfo(json.data);
  // };
  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage, avgRatingString } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(categories);
  return (
    <div className="menu text-center ">
      {/* <h1>{resInfo?.cards[0]?.card?.card?.info?.name}</h1> */}
      <h1 className="font-bold mt-4 text-2xl">{name}</h1>
      {/* <h3>{resInfo?.cards[0]?.card?.card?.info?.cuisines.join(",")}</h3> */}
      <h3 className="text-xl opacity-70  ">{cuisines.join(",")}</h3>
      <h3>
        Rating: {avgRatingString}⭐{costForTwoMessage}
      </h3>

      {/* categories accordions  */}
      {categories.map((category , index) => (
        <ResturantCategoryMenu
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems = {index === showIndex ? true : false  }
          setShowindex = { ()=>{
            if(showIndex===null){
              setShowIndex(index);
            }
            else
           { setShowIndex(null);
             
          } 
            }
          }
       
          
      
        />
      ))}

      {/* <h2>Menu:</h2>
      <ol type="1">
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name}--
            {item.card.info.defaultPrice / 100 ||
              item.card.info.price / 100}{" "}
            Rs.
          </li> ((" YE SAB KUCH BAD M KIA THA IS SERIES M MAPPING K BAD "))
        ))} */}

      {/* <li>{ resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[0]?.card?.info?.name}</li>
        <li>{ itemCards[0]?.card?.info.name}</li>
        <li>Biryani</li>
        <li>{ itemCards[1]?.card?.info.name}</li>  (( YE SB PHLE KIA THA MAPPING SE))
        <li>{ itemCards[2]?.card?.info.name}</li>
        <li>{ itemCards[3]?.card?.info.name}</li> */}
      {/* </ol> */}
    </div>
  );
};
export default ResturantMenu;
