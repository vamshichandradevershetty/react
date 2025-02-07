import Restacard from './Restacard';
import { useState,useEffect } from 'react';
import Shimmer from './shimmer';
import { Link } from 'react-router';
const Body = () => {

    let [listOfRestaurent,setlistOfRestaurent] = useState([]);
    const [filteredRestaurent,setfilteredRestaurent] = useState([]);
    const [searchText,setSearchText] = useState("");

    console.log("body rendering")
    useEffect(()=>{
        fetchdata();
    },[])

    const fetchdata = async () =>{
       // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3317842&lng=78.52976369999999&collection=80440&tags=layout_CCS_Idli&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
       const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3317842&lng=78.52976369999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        // debugger;
        const json = await data.json();
        console.log(json)
        //console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
        setlistOfRestaurent(json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredRestaurent(json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    

    return listOfRestaurent.length === 0 ? <Shimmer/> : ( //this concept is conditional rendering
        <div className="body">
            
            <div className="filter">
            <div className="search">
                <input type='text' className='search' value={searchText} onChange={(e)=>{
                    setSearchText(e.target.value)
                }}/>
                <button onClick={()=>{

                    console.log(searchText)
                    const filteredRestaurent = listOfRestaurent.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                    setfilteredRestaurent(filteredRestaurent);

                }}>search</button>
            </div>
                <button className='filterbtn' onClick={()=>{
                    const filteredRestaurent = listOfRestaurent.filter((res) => res.info.avgRating>4.0)
                    setfilteredRestaurent(filteredRestaurent);
                }}>
                Top rated restaurents
                </button>
            </div>
            <div className="restacontainer">
            {
                filteredRestaurent.map(restaurent => (
                        <Link key={restaurent.info.id} to={"/restaurants/"+restaurent.info.id}><Restacard  resdata={restaurent} /></Link>
                    ))
                }             
            </div>
        </div>
    );
};
export default Body;