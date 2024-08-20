import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

// class About extends React.Component {
// OR
class About extends Component {
    constructor(props) {
        super(props)

        console.log("Parent Constructor")
    }

    componentDidMount(){
        console.log("Parent Component Did Mount")
    }

    render(){
        console.log("Parent Render")


        return (
            <div>
                <h1>About Class Component</h1>
                {<div>
                    Logged In User
                    <UserContext.Consumer>
                        {({loggedInUser})=> 
                        (<h1 className="text-xl font-bold">
                            {loggedInUser}
                        </h1>)
                        }
                    </UserContext.Consumer>
                </div>}
                <h2>This is Namaste React Web Series</h2>
                <UserClass name={"Gursimran"} location={"Chandigarh"} contact={"9999999999"}/>
            </div>
        )
    }
}

export default About;