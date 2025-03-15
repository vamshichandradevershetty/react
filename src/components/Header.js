import { logo_URL } from "../utils/constants";
import {useContext, useState} from 'react';
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import { userContext } from "../utils/userContext";
import { useSelector } from "react-redux";
export const Header = () => {
    let [btnName,setbtnName] = useState("LogIn");
    const onlineStatus = useOnlineStatus();
    const {loggedInUser} = useContext(userContext);
    //subscribing to the store using a selector
    const cartItems = useSelector((store)=> store.cart.items);
    console.log(cartItems);
    return (
        
        <div className="flex justify-between bg-indigo-200">
            <div className="logoimg">
                <img
                    className="w-30"
                    src={logo_URL}
                    alt="Logo"
                />
            </div>
            <div className="flex items-center">
                <ul className="flex px-4 m-4">
                    <li className="px-4">OnlineStatus:{ onlineStatus ? "✅": "❌"}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">AboutUs</Link></li>
                    <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4"><Link to="/Grocery">Grocery</Link></li>
                    <li className="px-4 font-bold"><Link to="/cart">Cart({cartItems.length})</Link></li>
                    <button className="login" onClick={()=>{
                        btnName === "LogIn"? setbtnName("LogOut"): setbtnName("LogIn");
                     }}>{btnName}</button>
                    <li className="px-4 font-bold">{loggedInUser}</li>
                </ul>
            </div>  
        </div>
    );
};
