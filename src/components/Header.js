import React, { useContext } from "react";
import firebase from "firebase/app";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Header = () => {
  const history = useHistory();
  const { user, setUser } = useContext(AuthContext);
  firebase.auth().onAuthStateChanged(function(firebaseUser) {
    if (firebaseUser) {
      setUser(firebaseUser)
    }
  });
  
  
  const handleLogout = () => {
    firebase.auth().signOut().then(() => {
      console.log("Signed out")
      setUser(null);
      history.push("/");
    }).catch((error) => {
      console.log(error);
    });
  }

  return (
    <header>
      <h1>Qualification Passport</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          {!user ? (
            <>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/login">Login</Link></li>
            </>
          ) : (
            <li>
              <span>{user.email}</span>  
              <button type="button" onClick={handleLogout}>Logout</button>
          </li>
          )}
        </ul>
      </nav>
    </header>
  )
};

export default Header;
