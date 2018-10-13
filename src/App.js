import React, { Component } from "react";
import Contact from "./components/Contact";
import Header from "./components/Header";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <div className="container">
          <Contact
            name="Muhtasim Musfiq Zarab"
            email="musfiq.zarab@iut-dhaka.edu"
            phone="+8801685055749"
          />
          <Contact
            name="Maimuna Haque Mou"
            email="musfiq.zarab@iut-dhaka.edu"
            phone="+8801685055749"
          />
        </div>
      </div>
    );
  }
}

export default App;
