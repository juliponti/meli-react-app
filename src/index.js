import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./pages/App";
import Carousel from "./pages/carousel";

ReactDOM.render(
  <Router>
    <Route exact path="/meli-react-app" component={App} />
    <Route exact path="/carousel/:site" component={Carousel} />
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
