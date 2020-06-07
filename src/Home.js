import React, { Component } from "react";
import fire from "./config/fire";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  lagout() {
    fire.auth().signOut();
    console.log("Logged Out");
  }
  render() {
    return (
      <div>
        <h1>You are logged in</h1>
        <button onClick={this.lagout}>LogOut</button>
      </div>
    );
  }
}
export default Home;
