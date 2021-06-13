import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Workers from "./Workers";
import WorkerProfile from "./WorkerProfile";
import WorkerAlert from "./WorkerAlert";
import Login from "./Login";
import Register from "./Register";
import { AuthContext } from "../context/AuthContext";
import firebase from "firebase/app";
import firebaseConfig from "../firebase";

import { AppWrapper } from "../styles/App";

firebase.initializeApp(firebaseConfig);

function App() {
  const [user, setUser] = useState(null);
  return (
    <Router>
      <AppWrapper className="qualpass-app">
        <AuthContext.Provider value={{ user, setUser }}>
          {/* <Header /> */}
          <Switch>
            <Route exact path="/">
              <Register />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/workers">
              <Header />
              <Workers />
            </Route>
            <Route exact path="/worker/:workerId">
              <Header />
              <WorkerProfile />
            </Route>
            <Route exact path="/alert/:workerId">
              <Header />
              <WorkerAlert />
            </Route>
          </Switch>
        </AuthContext.Provider>
      </AppWrapper>
    </Router>
  );
}

export default App;
