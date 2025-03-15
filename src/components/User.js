import { useState } from "react";

const User = (props) =>{
    const [count] = useState(0);
    const [count2] = useState(1)
    return (
        
         <div className="User">
            <h2>Name: {props.name}</h2>
            <h2>count:{count}</h2>
            <h2>count:{count2}</h2>
            <h3>Location: {props.location}, United States</h3>
            <h3>Contact: @Vamshichandra</h3>
        </div>
        );
}

export default User;