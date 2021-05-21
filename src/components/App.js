import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Workers from "./Workers";
import WorkerProfile from "./WorkerProfile";
import Login from "./Login";
import "../styles/App.css";

function App() {
  return (
    <Router>
      <div className="qualpass-app">
        <Header />
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Workers />
          </Route>
          <Route exact path="/worker/:workerId">
            <WorkerProfile />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
