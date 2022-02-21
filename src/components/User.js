import { Component } from "react";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      visible : false
     }
  }

handleClick = () => {
  console.log('Click');
  this.setState({visible: !this.state.visible})
}

  render() { 
    return ( 
    <div>
      {console.log('state', this.props.contact)}
       <div>

        <p>{`${this.props.contact.name.first} ${this.props.contact.name.last}`}</p>
        <img src={this.props.contact.picture.thumbnail} /> <br/>
        <button className="button" onClick={()=>{this.handleClick()}}>Show Details</button> 
        {console.log(this.state.visible)}
        {!this.state.visible
        ? <div></div>
        :<div>
          <p>{this.props.contact.email}</p>
          </div>}
      </div>
    </div> );
  }
}
 
export default User;


