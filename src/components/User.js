const User = (props) =>{
    return (
         <div className="User">
            <h2>Name: {props.name}</h2>
            <h3>Location: {props.location}, United States</h3>
            <h3>Contact: @Vamshichandra</h3>
        </div>
        );
}

export default User;