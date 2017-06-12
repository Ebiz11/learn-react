import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import { Router, Route, browserHistory } from "react-router";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { User } from "./components/User";

class App extends Component {
  render() {
    var user = {
      name : "anna",
      hobbies: ["Bola", "Tinju"]
    }
    return (
      <div><Header/>
      <Home name={"Lustria Ebiz"} age={24} user={user}>
        <p>This is paragraph!</p>
      </Home>
      <Footer/>
      </div>
    )
  }
}

export default App;
