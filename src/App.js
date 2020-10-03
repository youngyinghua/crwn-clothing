import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepages/homepage.component";

import ShopPage from "./pages/shop/shop.component";
import "./App.css";
import Header from "./components/header/header.component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
