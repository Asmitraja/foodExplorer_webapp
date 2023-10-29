import ResturantCard from "./ResturantCard";
import useOnlineStatus  from "../utils/useOnlineStatus";
import Shimmer from "./Shimmer";
import UserContext from "../utils/UserContext";
import Carousel from "./Carousel";
import Futter from "./Futter";
import img1 from  "../images/Connection.jpg";
import resList from "../utils/mockData";
import { useEffect, useState ,useContext } from "react";
import { Link } from "react-router-dom";

const Body = () => {
  //Local state variable-superpowerful variable
  let [listofResturants, setlistofResturants] = useState([]);
  const [filteredResturants, setFilteredResturants] = useState([]);
  const [searchText, setSearchText] = useState("");

  // Normal Js variable
  //   let listofResturantsJs = [{

  //     "info":
  //     {
  //         "id": "105052",
  //         "name": "Burger Ji",
  //         "cloudinaryImageId": "h14erb1udxpttvg6n5uy",
  //         "areaName": "Civil Lines",
  //         "costForTwo": "₹250 for two",
  //         "cuisines": [
  //           "Italian",
  //           "Continental",
  //           "Snacks"
  //         ],
  //         "avgRating": 3.1,
  //     }
  //   },
  //   {
  //     "info":
  //     {
  //         "id": "105053",
  //         "name": "KFC",
  //         "cloudinaryImageId": "h14erb1udxpttvg6n5uy",
  //         "areaName": "Civil Lines",
  //         "costForTwo": "₹250 for two",
  //         "cuisines": [
  //           "Italian",
  //           "Continental",
  //           "Snacks"
  //         ],
  //         "avgRating": 4.1,
  //     }
  //   },
  //   {
  //     "info":
  //     {
  //         "id": "105054",
  //         "name": "Mac'Donalds",
  //         "cloudinaryImageId": "h14erb1udxpttvg6n5uy",
  //         "areaName": "Civil Lines",
  //         "costForTwo": "₹250 for two",
  //         "cuisines": [
  //           "Italian",
  //           "Continental",
  //           "Snacks"
  //         ],
  //         "avgRating": 4.5,
  //     }
  //   }
  // ];
  // console.log("body is updating" , listofResturants);
  useEffect(() => {
    fetchData();
  }, []);
  // console.log("useEffect Called"); //Use effect will be called after the body component will be render
  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    // console.log(json);

    //OPTIONAL CHAINING
    setlistofResturants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredResturants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

    const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return ( <div> no internet connection
      <img src={img1} alt="image1"></img>
    </div>
    );

    const {loggedInUser, setUserName} =useContext(UserContext);

  //   CONDITIONAL RENDERING
  if(listofResturants.length==0){
    return (<Shimmer/>);
  }

  return listofResturants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <Carousel/>
      <div className=" w-[80%] m-auto py-8">
        <div className=" flex justify-between ">
        <div className="searchbox and button mt-3  ">  <input
            type="text"
            className=" border border-solid border-black  p-2 rounded-lg w-56"
            placeholder="Search for Restaurants"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="searchBtn text-white bg-gradient-to-br from-slate-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2 text-center ml-2 mb-2"
            onClick={() => {
              //FILTER THE RESTURANT CARD AND UPDATE THE UI
              //SEARCHTEXT
              const filteredResturants = listofResturants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredResturants(filteredResturants);
              // console.log(searchText);
            }}
          >
            {" "}
            Search
          </button> </div>
          <div className="top rated restaurant mt-4">  <button 
          className="text-white bg-gradient-to-br from-slate-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-md px-5 py-2 placeholder: text-center  "
          onClick={() => {
            //filter logic

            const filteredList = listofResturants.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredResturants(filteredList);

            // console.log(listofResturants);
          }}
        >
          Top rated 
Restaurants 
        </button> </div>
          <div className="username mt-4 "> <label className="ml-3 text-lg">UserName: </label>
        <input type="text " maxlength="30"
            className=" border border-solid border-black bg p-1 rounded-lg "
            value={loggedInUser}
            onChange={(e)=> setUserName(e.target.value)} ></input>
        
        </div>
        </div>
        
      </div>
      <hr className="w-[84%] mx-auto"/>

      <div className="resturantContainer flex flex-wrap mx-3 justify-center">
        {filteredResturants.map((resturant) => (
          <Link
            className="linkstyle mx-7 my-5"
            key={resturant.info.id}
            to={"/resturants/" + resturant.info.id}
          >
            {" "}
            <ResturantCard resData={resturant} />{" "}
          </Link>
        ))}
        {/* <ResturantCard resData={resList[0]}/>
            <ResturantCard resData={resList[1]}/>
            <ResturantCard resData={resList[2]}/>
            <ResturantCard resData={resList[3]}/>
            <ResturantCard resData={resList[4]}/>
            <ResturantCard resData={resList[5]}/>
            <ResturantCard resData={resList[6]}/>
            <ResturantCard resData={resList[7]}/>
            <ResturantCard resData={resList[8]}/>
            <ResturantCard resData={resList[0]}/> */}
        {/* <ResturantCard
            resName="KFC"
            cuisines="American,Chicken,Fast food"
            /> */}
     
      </div>
      <Futter/>
    </div>
  );
};
export default Body;
