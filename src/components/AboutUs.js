import User  from "./User"
import UserClass from "./UserClass"
export const AboutUs = () =>{
    return (
        <div>
            <h1>This is a sample food app</h1>
            <h2>React practice Applications</h2>
            <h2>Sample checking</h2>
            <User name={"Vamshi chandra"} location={"New Jersey"}/>
            <UserClass name={"Vamshi chandra"} location={"Texas"} />
        </div>

    )
}