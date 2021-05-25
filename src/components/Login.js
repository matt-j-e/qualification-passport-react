import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
// import authenticateUser from "../requests/authenticateUser";
import firebase from "firebase/app";
// import firebaseConfig from "../firebase";
import Alert from "./Alert";

// firebase.initializeApp(firebaseConfig);

const Login = () => {
  const history = useHistory();
  const { setUser } = useContext(AuthContext);

  const initialState = {
    fields: {
      email: "",
      password: "",
    },
    alert: {
      message: "",
      isSuccess: false,
    }
  };
  const [fields, setFields] = useState(initialState.fields);
  const [alert, setAlert] = useState(initialState.alert);

  const handleFieldChange = (event) => {
    setFields((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    firebase.auth().signInWithEmailAndPassword(fields.email, fields.password)
      .then((userCredential) => {
        // Signed in
        console.log(userCredential);
        setUser(userCredential);
        setAlert({
          message: "You are logged in",
          isSuccess: true,
        });
        history.push("/worker/" + userCredential.user.uid);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
        if (errorCode === "auth/user-not-found") {
          setAlert({
            message: "We don't have an account with that email address.",
          })
        } else {
          setAlert({
            message: "Password not recognised.",
          })
        }
      });
  }

  return (
    <div className="login">
      <h2>Login</h2>
      <Alert message={alert.message} />
      <form onSubmit={handleLogin} className="login-form" action="" method="post">
        <div>
          <label htmlFor="email">
            Email address
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={fields.email}
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            Password
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={fields.password}
              onChange={handleFieldChange}
          />
          </label>
        </div>
        
        <input type="submit" value="Login" />
      </form>
    </div>
  )
};

export default Login;
