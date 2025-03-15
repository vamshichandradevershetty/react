import { useState,useEffect } from "react"
import Shimmer from "./shimmer";
import { useParams } from "react-router";
import { Menu_Api } from "../utils/constants";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import { RestaurantCategory } from "./RestaurantCategory";


export const RestaurantsMenu =() =>{

    const {resid} = useParams();
    console.log(resid);
    const [showIndex,setshowIndex] = useState(null);
    const resMenu = useRestaurentMenu(resid)
 //   console.log(resMenu);
//  console.log(resMenu?.cards?.[2]?.card?.card?.info)
  //const {name,cuisines,costForTwoMessage} = resMenu?.cards?.[2]?.card?.card?.info;
  const Itemcards = resMenu?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card.itemCards;
  //console.log(resMenu?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
  //console.log(Itemcards)

  const catergories = resMenu?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" || c?.card?.card?.["@type"]=== "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory")
  //console.log(catergories)
    return resMenu === null ? <Shimmer/> : (
        <div className="text-center">
           <h2 className="font-bold my-10 text-2xl">{resMenu?.cards?.[2]?.card?.card?.info.name}</h2>
            <p className="font-bold text-lg">{resMenu?.cards?.[2]?.card?.card?.info.cuisines.join(", ")}   {resMenu?.cards?.[2]?.card?.card?.info.costForTwoMessage}</p>
            {catergories.map((category,index) => 
              (<RestaurantCategory key={category?.card?.card.title}
               data = {category?.card?.card} 
               showItems={index === showIndex ? true : false}
               setshowIndex = {()=>setshowIndex(index)}/>))}
               
      </div>
    )
//*/}
    }
