import { useDispatch, useSelector } from "react-redux";
import { ItemList } from "./itemList";
import { clearCart } from "../utils/cartSlice";

export const Cart = ()=>{

    const dispatch = useDispatch();
    const callClearCart = ()=>{
        dispatch(clearCart())
    }

    const cartItems = useSelector((store)=>store.cart.items)
    return (
        <div className=" text-center m-10 p-10">
        <h1 className="text-4xl font-bold">Cart ({cartItems.length})</h1>
        <button className="p-4 m-4 bg-gray-600 text-white rounded-lg"onClick={callClearCart}>Clear Cart</button>
        {cartItems.length === 0 && <h1>Cart is Empty please add Items to Cart</h1>}
        <div className="w-6/12 m-auto">
        <ItemList items={cartItems}/>
        </div>
        </div>
    );
}