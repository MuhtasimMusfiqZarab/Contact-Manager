import React, { Component } from "react";
import "./App.css";
import Contact from "./components/Contact";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />
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
    );
  }
}

export default App;
