import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from "./RestaurantCategory";

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
   console.log('******CARDS******', resInfo?.cards?.[groupedCardIndex]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

   const categories = resInfo?.cards?.[groupedCardIndex]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(ele => 
    ele?.card?.card?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory')
    console.log('*****categories****', categories)

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(', ')} - {costForTwoMessage}
      </p>

      {/* categories accordians*/}
      {categories.map(
        (category) => {
          console.log('***hmmmmm***')
      return <RestaurantCategory data = {category?.card?.card}/>
      })}
    </div>
  );
  }
};

export default RestaurantMenu;
