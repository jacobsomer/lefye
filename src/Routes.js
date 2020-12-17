import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import AboutUs from "./containers/AboutUs";
import Analytics from "./containers/Analytics"
import AnalyticsVis from "./containers/AnalyticsVis"
export default function Routes(props) {
  return (
    <Switch>
      <Route exact path="/">
        <Home theme={props.theme} previous={props.previous}/>
      </Route>
      <Route exact path="/AboutUs"  >
        <AboutUs theme={props.theme}/>
      </Route>
      <Route exact path="/analytics-vis">
        <AnalyticsVis theme = {props.theme}/>
      </Route>
      <Route exact path="/Analytics"  >
        <Analytics theme={props.theme}/>
      </Route>
      <Route>
        <NotFound/>
      </Route>
    </Switch>
  );
}
