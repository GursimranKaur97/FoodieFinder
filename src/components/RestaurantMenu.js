import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from '../utils/useRestaurantMenu';

const RestaurantMenu = () => {
  const {resId} = useParams();
  const resInfo = useRestaurantMenu(resId);

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
