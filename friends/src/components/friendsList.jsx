import React from "react";


import { axiosWithAuth } from "../utils/axiosWithAuth";

class FriendList extends React.Component {
  state = {
    data: []
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    // update gas prices
    axiosWithAuth()
      .get("/friends")
      .then(res => {
        console.log( res.data);
        this.setState(res)
        // this.setState({
        //   gasPrices: res.data.data.filter(
        //     price =>
        //       price.type === "Gasoline - Regular" &&
        //       (price.location === "US" || price.location === "State of Hawaii")
        //   )
        // });
      })
      .catch(err =>
        console.error( err)
      );
  };



  render() {
   console.log(this.state)
    return (
      <div>
      {this.state.data.map(d => {
        return (
          <div key={d.id}>
            <h2>{d.name}</h2>
        <h4>{d.age}</h4>
        <h4>{d.email}</h4>
            </div>

        )
      })}
      </div>

      
    );
  }
  
}

export default FriendList;


