import { useState,useEffect } from "react";
import { Menu_Api } from "./constants";

const useRestaurentMenu = (resid) =>{
    
    const [resMenu,setResMenu] = useState(null);
    const [error,setError] = useState(null);

    useEffect(()=>{
        fetchresMenu();
    },[]) 

    const fetchresMenu = async () =>{
        try{
        const data = await fetch(Menu_Api+resid+"&catalog_qa=undefined&submitAction=ENTER")
        debugger
        if(!data.ok){
            throw new Error(`Error: ${data}`)
        }
        const json = await data.json();
       // console.log(json.data)
        setResMenu(json.data)
        } catch(err){
            setError(err.message);
        }
    }
  
    return resMenu;

}

export default useRestaurentMenu;