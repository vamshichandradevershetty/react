import { useState,useEffect } from "react"
import Shimmer from "./shimmer";
import { useParams } from "react-router";
import { Menu_Api } from "../utils/constants";

export const RestaurantsMenu =() =>{

    const {resid} = useParams();
    console.log(resid);
    const [resMenu,setresMenu] =useState(null);
    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async () =>{
        console.log(Menu_Api)
        
        const data = await fetch(Menu_Api+resid+"&catalog_qa=undefined&submitAction=ENTER");
        console.log(Menu_Api+resid);
        console.log("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.3317842&lng=78.52976369999999&restaurantId=12046&catalog_qa=undefined&submitAction=ENTER")
        const json = await data.json();
        console.log(json.data);
        setresMenu(json.data);
    
    }

    console.log(resMenu?.cards?.[2]?.card?.card?.info)
   
    const {name,cuisines,costForTwoMessage} = resMenu?.cards?.[2]?.card?.card?.info;

  const Itemcards = resMenu?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card.itemCards;

  console.log(Itemcards)
  
    //if (resMenu === null) return <Shimmer/>;



    return resMenu.length === 0? <Shimmer/> : (
        <div>
           <h2>{name}</h2>
            <p>{cuisines.join(", ")}   {costForTwoMessage}</p>
            <h3>Menu</h3>
            <ul>{
                Itemcards.map(items => <li key={items.card.info.id}>{items.card.info.name} - {"Rs."}{items.card.info.price/100 || items.card.info.defaultprice/100}</li>)
            }</ul>
      </div>
    )
//*/}
    }
