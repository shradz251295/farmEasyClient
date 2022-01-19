import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FarmerSignInUp from "./components/farmer/farmerSignInSignUp";
import "./App.css";
import Register from "./pages/Register";
import FarmerLandingPage from "./components/farmer/farmerLandingPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          {/* <Routes> */}
            <Route path="/" exact strict component={Home} />
            <Route path="/farmer-login" component={FarmerSignInUp} />
            <Route path="/farmer-register" component={Register} />
            <Route path="/farmer" component={FarmerLandingPage} />

          {/* </Routes> */}
        </Router>
      </div>
    );
  }
}
export default App;
