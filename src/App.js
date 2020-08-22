import React from 'react';
import './App.css';
import {Route, Switch} from "react-router";
import Home from "./pages/Home/Home.page";

function App() {
  return (
      <Switch>
          <Route exact path='/' component={Home} />
      </Switch>
  );
}

export default App;
