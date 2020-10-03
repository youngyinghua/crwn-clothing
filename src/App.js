import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepages/homepage.component";

import "./App.css";

const ShopPage = (props) => (
  <div>
    <h1>{`${props.match.params.category.toUpperCase()} PAGE`}</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop/:category" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
