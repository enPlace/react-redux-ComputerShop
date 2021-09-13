import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/HomeComponents/Home";
import Shop from "./Components/ShopComponents/Shop";
import Cart from "./Components/CartComponents/Cart";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Navbar></Navbar>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
