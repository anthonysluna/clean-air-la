import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import App from "../App";
import Results from "../containers/Results";

export default function Layout() {
  return (
    <React.Fragment>
      <h1 style={{ padding: 20, margin: 0 }}>Clean Air L.A.</h1>
      <BrowserRouter>
        <React.Fragment>
          <Route exact path="/" component={App} />
          <Route path="/results" component={Results} />
        </React.Fragment>
      </BrowserRouter>
    </React.Fragment>
  );
}
