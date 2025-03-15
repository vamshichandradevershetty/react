import { useEffect,useState } from "react";

const useOnlineStatus = () =>{
    
    const [onlineStatus,onlineStatuschange] = useState(true);
    
    useEffect(()=>{
        window.addEventListener("offline",()=>{
            onlineStatuschange(false);
        })
        window.addEventListener("online",()=>{
            onlineStatuschange(true);
        })
    },[])


    return onlineStatus;
}

export default useOnlineStatus;