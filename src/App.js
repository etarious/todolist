import React from "react";
import Home from "./Components/Pages/Home";

import 'bulma/css/bulma.css';
import "animate.css";
import './App.css';

class App extends React.Component {
  render(){
    return (
      <div className="container is-fullh">
        <Home />
      </div>
    );
  }
  
}

export default App;