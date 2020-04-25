import React from 'react';


import { axiosWithAuth } from "../utils/axiosWithAuth";

class CreateFriend extends React.Component {
  state = {
    id: 1,
  name: '',
  age: 24,
  email: '',
    
  };

  handleChange = e => {
    this.setState({
     
        ...this.state,
        [e.target.name]: e.target.value
      
    });
  };

  newFriend = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/friends", {
      id: Date.now(),
      name: this.state.name,
      age: this.state.age,
      email: this.state.email,
      })
      .then(res => {
        console.log("bk: Login.js: login: success: res: ", res);
        // localStorage.setItem("token", res.data.payload);
        this.props.history.push("/protected");
      })
      .catch(err => console.error(err));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.newFriend}>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="age"
            value={this.state.age}
            onChange={this.handleChange}
          />
           <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        
          <button>submit new Friend</button>
        </form>
      </div>
    );
  }
}

export default CreateFriend;
