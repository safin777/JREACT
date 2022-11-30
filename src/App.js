import "./App.css";
import React from "react";

import Nav from "./Components/Nav.jsx";
//import NavC from "./classComponents/NavC";
//import Profile from "./Components/Profile";
import Counter from "./Components/Counter"; 
import ConditionalCom from "./Components/ConditionalCom";
import List from "./Components/List";
import Form from "./Components/Form";

function App() {
  return (
    <div className="App">
      <Nav />
      <Counter />
      <ConditionalCom/>
      <List/>
      <Form/>
    </div>
  );
}

export default App;
