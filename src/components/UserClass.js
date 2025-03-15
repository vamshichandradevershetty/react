import React from "react";
import { userContext } from "../utils/userContext";
class UserClass extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            userInfo:{
                name:"user",
                location:"null"
            },
        };
       // console.log("child constructor")
    }
   async componentDidMount(){
      //  console.log("child mounted");
       const data = await fetch("https://api.github.com/users/vamshichandradevershetty");
       const json = await data.json();
       //console.log(json)
       
       this.setState({
        userInfo: json,
       })
    }

    componentDidUpdate(){
      //  console.log("component updated");
    }
    componentWillUnmount(){
      //  console.log("moved to other page");
    }
    render() {
      //console.log("child rendered")
      //console.log(this.state.userInfo)
        return (
            <div className="UserClass">
            <h2>I am a Class Component</h2>
            <img src={this.state.avatar_url}/>
            <h2>Name: {this.state.userInfo.name}</h2>
            <h3>Location: {this.state.userInfo.location}</h3>
            <h3>Contact: @Vamshichandra</h3>
           <userContext.Consumer>
            {({loggedInUser})=><h2 className="font-bold">{loggedInUser}</h2>}
           </userContext.Consumer>
            </div>
        );
    }
}

export default UserClass;