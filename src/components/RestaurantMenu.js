import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const {resId} = useParams();

  useEffect(() => 
  {
    fetchMenu();

    const timer = setInterval(() => {
      console.log("RESTAURANT MENU SET INTERVAL CALLED")
    }, 1000);

    // unmounting phase it'll be called when we'll change our page
    return () => {
      clearInterval(timer)
    }
  }, // Callback function(It will be called after our component has rendered)
  [] // Dependency Array
  ); 

  const fetchMenu = async () => {
    try{
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResInfo(json.data);
    } catch(error) {
        console.error('*****RestaurantMenu broke****', error)
    }
  }

  if(!resInfo){
  return <Shimmer/>;
  } else {
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards?.[2]?.card?.card?.info;
    const groupedCardIndex = resInfo?.cards?.length - 1;
   const {itemCards } = resInfo?.cards?.[groupedCardIndex]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(', ')} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => {
            return <li key={item.card.info.id}>{item.card.info.name} - Rs. {item.card.info.price/100 || item.card.info.defaultPrice/100}</li>
        })}
      </ul>
    </div>
  );
  }
};

export default RestaurantMenu;
