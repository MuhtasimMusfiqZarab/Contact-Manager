import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    default:
      return state;
  }
};
class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Muhtasim Musfiq Zarab",
        email: "musfiqzarab@iut-dhaka.edu",
        phone: "+8801685055749"
      },
      {
        id: 2,
        name: "Maimuna Haque Mou",
        email: "musfiqzarab@iut-dhaka.edu",
        phone: "+8801685055749"
      },
      {
        id: 3,
        name: "Muhtasim Musfiq Zarab",
        email: "musfiqzarab@iut-dhaka.edu",
        phone: "+8801685055749"
      }
    ],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Provider;

export const Consumer = Context.Consumer;
