import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Workers from "./Workers";
import WorkerProfile from "./WorkerProfile";
import WorkerAlert from "./WorkerAlert";
import Login from "./Login";
import Register from "./Register";
import "../styles/App.css";
import { AuthContext } from "../context/AuthContext";
import firebase from "firebase/app";
import firebaseConfig from "../firebase";

firebase.initializeApp(firebaseConfig);

function App() {
  const [user, setUser] = useState(null);
  return (
    <Router>
      <div className="qualpass-app">
        <AuthContext.Provider value={{ user, setUser }}>
          <Header />
          <Switch>
          <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/">
              <Workers />
            </Route>
            <Route exact path="/worker/:workerId">
              <WorkerProfile />
            </Route>
            <Route exact path="/alert/:workerId">
              <WorkerAlert />
            </Route>
          </Switch>
        </AuthContext.Provider>
      </div>
    </Router>
  );
}

export default App;
