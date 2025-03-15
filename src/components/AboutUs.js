import react from "react";
import UserClass from "./UserClass"

class AboutUs extends react.Component{
constructor(props){
    super(props)
    //console.log("parent constructor")
}

ComponentDidMount(){
    //console.log("parent mounted");
}
render(){
    //console.log("parent rendered");
    return (
        <div>
            <h1>This is a sample food app</h1>
            <UserClass/>
        </div>
    );
}
}

export default AboutUs;
