import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";

export default function Routes(props) {
  return (
    <Switch>
      <Route exact path="/">
        <Home theme={props.theme} previous={props.previous}/>
      </Route>
      <Route exact path="/login"  >
        <Login theme={props.theme}/>
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}
