import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  console.log('***RestaurantMenu Triggered*')
  const {resId} = useParams();

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
    const data = await fetch(MENU_API + resId);
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

  if(!resInfo){
  return <Shimmer/>;
  } else {
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards?.[2]?.card?.card?.info;
    const groupedCardIndex = resInfo?.cards?.length - 1;
    console.log('****carddddddd******', resInfo?.cards?.[groupedCardIndex]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[0]?.card.card)
   const {itemCards } = resInfo?.cards?.[groupedCardIndex]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card;
   console.log('*****itemCards****', itemCards)

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
