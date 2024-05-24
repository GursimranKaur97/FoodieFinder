// Class based component
import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        userInfo: {
            name: "Dummy", 
            location: "Default",
            avatar_url: "Dummy"
        }
    }
    console.log("Child constructor");
  }

  async componentDidMount(){
    console.log("Child Component Did Mount")
    this.timer = setInterval(() => {
        console.log("REACT USER CLASS MOUNT")
    }, 1000)
    const data = await fetch("https://api.github.com/users/GursimranKaur97");
    const json = await data.json();
    this.setState({
        userInfo: json
    });

  }

  componentDidUpdate(){
    console.log("Child Component Did Update")
  }

  componentWillUnmount(){
    clearInterval(this.timer)
    console.log("Child Component Will Unmount")
    // Called when we're leaving the page
  }

  render() {
    console.log("Child Render");
    const {name, location, avatar_url} = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
      </div>
    );
  }
}

export default UserClass;
