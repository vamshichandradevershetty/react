//creating div with parent and adding another div as child and h1 element in child
import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
//JSX  => (converted to)react.createelement => react element(object) =>html element(after render)
import {Header} from "./components/Header";
import Body from './components/Body';
import {  RouterProvider } from "react-router";
import { createBrowserRouter, Outlet } from "react-router";
import AboutUs from "./components/aboutUs";
import {ContactUs} from "./components/ContactUs";
import {Error} from "./components/Error";
import { RestaurantsMenu } from "./components/restaurantsmenu";
//import { Grocery } from "./components/Grocery";
import { jsx as _jsx } from "react/jsx-runtime";
import { userContext } from "./utils/userContext";
import { Provider } from "react-redux";
import { appStore } from "./utils/appStore";
import { Cart } from "./components/Cart";




const Applayout = () => {
    const [userName,setuserName] = useState();

    useEffect((()=>{
        const data = "vamshichandra";
        setuserName(data)}),[])
    

 return (
    <Provider store={appStore}>
    <userContext.Provider value={{loggedInUser:userName}}>
    <div className="app">
    <Header/>
    <Outlet/>
    </div>
    </userContext.Provider>
    </Provider>
    );
}

const Grocery = lazy(() => import("./components/Grocery"));

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
                path: "/Grocery",
                element: <Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>
            },
            {
                path: "/restaurants/:resid",
                element: <RestaurantsMenu/>
            },
            {
                path: "/cart",
                element: <Cart/>
            }

        ],
        errorElement: <Error/>
    }
])
const parent = ReactDOM.createRoot(document.getElementById("root"));
parent.render(<RouterProvider router={approuter}/>)