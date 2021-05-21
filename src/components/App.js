import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Workers from "./Workers";
import WorkerProfile from "./WorkerProfile";
import Login from "./Login";
import "../styles/App.css";
import { AuthContext } from "../context/AuthContext";

function App() {
  const [user, setUser] = useState(null);
  return (
    <Router>
      <div className="qualpass-app">
        <AuthContext.Provider value={{ user, setUser }}>
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
        </AuthContext.Provider>
      </div>
    </Router>
  );
}

export default App;
