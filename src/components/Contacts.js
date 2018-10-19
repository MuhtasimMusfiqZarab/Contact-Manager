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

  deleteContact = id => {
    const { contacts } = this.state;
    const newContacts = contacts.filter(contact => contact.id !== id);

    this.setState({
      contacts: newContacts
    });
  };

  render() {
    const { contacts } = this.state;
    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            contact={contact}
            deleteClickHandler={this.deleteContact.bind(this, contact.id)}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
