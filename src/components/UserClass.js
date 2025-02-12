import React from "react";
class UserClass extends React.Component{
    constructor(props)
    {
        super(props)
    }
    render() {
        return (
            <div className="UserClass">
            <h2>I am a Class Component</h2>
            <h2>Name: {this.props.name}</h2>
            <h3>Location: {this.props.location}, United States</h3>
            <h3>Contact: @Vamshichandra</h3>
        
            </div>
        );
    }
}

export default UserClass;