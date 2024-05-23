import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  console.log('***RestaurantMenu Triggered*')

  useEffect(() => 
  {
    console.log('****Use Effect Triggered')
    fetchMenu();
  }, // Callback function(It will be called after our component has rendered)
  [] // Dependency Array
  ); 

  console.log('****hiiiii********')
  const fetchMenu = async () => {
    try{
    console.log('******halo**********')
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=31.00480&lng=75.94630&restaurantId=496806&catalog_qa=undefined&submitAction=ENTER"
    );
    console.log("**data*", data);
    const json = await data.json();
    console.log("**helo**", json);
    setResInfo(json.data);
    console.log("**card***", resInfo);
    console.log("***info****", resInfo?.cards[2]?.card?.card?.info);
    } catch(error) {
        console.error('*****RestaurantMenu broke****', error)
    }
  }

  if(!resInfo)
  return <Shimmer/>;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards?.[2]?.card?.card?.info;
  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines}</h3>
      <h3>{costForTwoMessage}</h3>
    </div>
  );
};

export default RestaurantMenu;
