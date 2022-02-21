import React, { Component } from "react";
import axios from "axios";
import User from "./User";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
    };
  }

  componentDidMount() {
    axios.get("https://randomuser.me/api?results=25")
      .then((response) => {
        this.setState({
          contacts: response.data.results        
        }) 
      });
  }

  render() {
    return (
      <div>
        {console.log(this.state)}
        {
          this.state.contacts.map((contact)=>{
            return(
             <User contact={contact}/>
            )
          })
        }
      </div>
      )
  }
}

export default Users;