import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
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
    ]
  };
  render() {
    const { contacts } = this.state;
    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
