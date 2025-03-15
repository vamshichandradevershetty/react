import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
export const ItemList = ({items}) =>{
    //console.log(items)
    const dispatch = useDispatch();
    const addNewItem = (item)=>{

        dispatch(addItem(item))

    }
    return (
        <div>
            {
            items.map(item =><div className="p-2 m-2 border-gray-400 border-b-2 text-left flex justify-between" id={item.card.info.id}>
                <div className="w-9/12">
                <div className="py-2">
                <span>{item.card.info.name}</span>
                <span> - ₹{item.card.info.price/100 || item.card.info.defaultPrice/100}</span>
                </div>
                <p className="text-xs">{item.card.info.description}</p>
                </div>
                
                <div className="w-3/12 p-4">
                <div className="absolute">
                <button className="p-2 bg-gray-600 text-white mx-20 rounded-lg shadow-lg" 
                //()=>addNewItem(item) is a callback function and addNewItem(item) is calling the function immediately
                onClick={()=>addNewItem(item)}>Add +</button>
                </div>
                <img src={CDN_URL+ item.card.info.imageId} className="w-full"/>
                </div>
            </div>)}
        </div>
    );
}