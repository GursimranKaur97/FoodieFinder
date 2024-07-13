import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  // Local State Variable - Super powerful variable
  const [ listOfRestaurants, setListOfRestaurants ] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState('');
  // Normal JS Variable
  // let listOfRestaurants = [];


  // Whenever state vairable update, react triggers a reconciliation cycle(re-renders the component)
  console.log("Body Triggered")

  useEffect(() => 
  {
    fetchData()
  }, // Callback function(It will be called after our component has rendered)
  [] // Dependency Array
  ); 
  const fetchData = async () => {
    const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.00480&lng=75.94630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
    const json = await data.json();

    //Optional Chaining
    setListOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false) return <h1>Looks like you're offline!! Please check your internet connection</h1>

  // Conditional Rendering
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              // Filter the restaurant cards and update the UI
              // serachText
              const filteredRestaurant = listOfRestaurants.filter((res)=> {
                return res?.info?.name.toLowerCase().includes(searchText.toLowerCase());
              })
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.5
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="Search">Search</div>
      <div className="res-container">
        {filteredRestaurant.map(
          (restaurant, index) => (
            <Link key={restaurant?.info?.id}
            to={"/restaurants/" + restaurant?.info?.id}><RestaurantCard resData={restaurant} /></Link>
          )
          // whenever we're looping over an element we need to provide key to identify the element uniquely, in case we don't provide the key then react we re-render all the restaurant cards as react will not know at what place we need to put the restaurant card so react cleans the container & render all the restaurant cards,
          // If we give key to each container react will know which container he has already rendered and in case new container will come in then react will add only the new container
          // We should never use index as a key as it's not recommended by React doc
        )}
        {/* <RestaurantCard resName="Subway" cuisine="Healthy Food, Salads" rating="4.3 stars" deliveryTime="38 minutes"/>
                  <RestaurantCard resName="KFC" cuisine="Burger, Popcorn" rating="4.4 stars" deliveryTime="40 minutes"/> */}
      </div>
    </div>
  );
};

export default Body;
