import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const dummy = "Dummy Data";
  const {resId} = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  if(!resInfo){
  return <Shimmer/>;
  } else {
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards?.[2]?.card?.card?.info;
    const groupedCardIndex = resInfo?.cards?.length - 1;
   const {itemCards } = resInfo?.cards?.[groupedCardIndex]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card;

   const categories = resInfo?.cards?.[groupedCardIndex]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(ele => 
    ele?.card?.card?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory')

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(', ')} - {costForTwoMessage}
      </p>

      {/* categories accordians*/}
      {categories.map(
        (category, index) => {
      // Controlled Component
      return <RestaurantCategory 
      key={category?.card?.card.title} 
      data = {category?.card?.card}
      showItems={index=== showIndex ? true: false}
      setShowIndex={()=> setShowIndex(index)}
      dummy={dummy}
      />
      })}
    </div>
  );
  }
};

export default RestaurantMenu;
