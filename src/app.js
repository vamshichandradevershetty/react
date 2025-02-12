//creating div with parent and adding another div as child and h1 element in child
import React from "react";
import ReactDOM from "react-dom/client";
//JSX  => (converted to)react.createelement => react element(object) =>html element(after render)
import {Header} from "./components/Header";
import Body from './components/Body';
import {  RouterProvider } from "react-router";
import { createBrowserRouter, Outlet } from "react-router";
import { AboutUs } from "./components/aboutUs";
import {ContactUs} from "./components/ContactUs";
import {Error} from "./components/Error";
import { RestaurantsMenu } from "./components/restaurantsmenu";

const Applayout = () => {
 return (
    <div className="app">
    <Header/>
    <Outlet/>
    </div>
    );
}


const approuter = createBrowserRouter([
    {
        path: "/",
        element: <Applayout/>,
        children:[
            {
                path: "/",
                element: <Body/>

            },
            {
                path: "/about",
                element: <AboutUs/>
            },
            {
                path: "/contact",
                element: <ContactUs/>
            },
            {
                path: "/restaurants/:resid",
                element: <RestaurantsMenu/>
            }

        ],
        errorElement: <Error/>
    }
])
const parent = ReactDOM.createRoot(document.getElementById("root"));
parent.render(<RouterProvider router={approuter}/>)