import { logo_URL } from "../utils/constants";
import {useState} from 'react';
import { Link } from "react-router";
export const Header = () => {
    let [btnName,setbtnName] = useState("LogIn");
    return (
        
        <div className="Header">
            <div className="logoimg">
                <img
                    className="logo"
                    src={logo_URL}
                    alt="Logo"
                />
            </div>
            <div className="navlist">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">AboutUs</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li>Cart</li>
                </ul>
            </div>
           <button className="login" onClick={()=>{
            btnName === "LogIn"? setbtnName("LogOut"): setbtnName("LogIn");
           }}>{btnName}</button>
            
        </div>
    );
};
