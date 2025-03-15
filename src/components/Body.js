import Restacard,{withPromotedLabel} from './Restacard';
import { useState,useEffect } from 'react';
import Shimmer from './shimmer';
import { Link } from 'react-router';
import useOnlineStatus from '../utils/useOnlineStatus';
const Body = () => {

    let [listOfRestaurent,setlistOfRestaurent] = useState([]);
    const [filteredRestaurent,setfilteredRestaurent] = useState([]);
    const [searchText,setSearchText] = useState("");
    const PromotedRestaurentCard = withPromotedLabel(Restacard)

    console.log("body rendering")
    useEffect(()=>{
        fetchdata();
    },[])

    const fetchdata = async () =>{
       // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3317842&lng=78.52976369999999&collection=80440&tags=layout_CCS_Idli&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
       const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3317842&lng=78.52976369999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        //console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
        //debugger
        setlistOfRestaurent(json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredRestaurent(json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false) return <h1>You're seems to be offline check internet connection</h1>

    return listOfRestaurent.length === 0 ? <Shimmer/> : ( //this concept is conditional rendering
        <div className="body">
            
            <div className="filter flex">
            <div className="search p-4 m-4 flex items-center ">
                <input type='text' className='search p-2 m-1 border solid border-black' value={searchText} onChange={(e)=>{
                    setSearchText(e.target.value)
                }}/>
                <button className="px-2 py-2 bg-gray-500 cursor-pointer rounded-lg" onClick={()=>{

                    console.log(searchText)
                    const filteredRestaurent = listOfRestaurent.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                    setfilteredRestaurent(filteredRestaurent);

                }}>search</button>
            </div>
            <div className="search p-4 m-4 flex items-center ">
                <button className="px-2 py-2 bg-amber-100 cursor-pointer rounded-lg" onClick={()=>{
                    const filteredRestaurent = listOfRestaurent.filter((res) => res.info.avgRating>4.0)
                    setfilteredRestaurent(filteredRestaurent);
                }}>
                Top rated restaurents
                </button>
            </div>
            </div>
            <div className="restacontainer flex flex-wrap">
            {
                filteredRestaurent.map(restaurent => (
                        <Link key={restaurent.info.id} to={"/restaurants/"+restaurent.info.id}>
                            {
                            restaurent.info.veg ? <PromotedRestaurentCard resdata={restaurent}/> : <Restacard  resdata={restaurent} />}
                            
                            </Link>
                    ))
                }             
            </div>
        </div>
    );
};
export default Body;