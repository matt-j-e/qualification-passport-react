import React, { useState } from "react";
import authenticateUser from "../requests/authenticateUser";
// import app from "../firebase";
import firebase from "firebase/app";
import firebaseConfig from "../firebase";

firebase.initializeApp(firebaseConfig);

const Login = () => {
  const initialState = {
    fields: {
      email: "",
      password: "",
    },
  };
  const [fields, setFields] = useState(initialState.fields);

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
    authenticateUser(fields)
      .then((response) => {
        console.log(response);
        firebase.auth().signInWithCustomToken(response.data)
          .then((userCredential) => {
            console.log(userCredential);
          })
          .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage);
          });
      });
  };

  return (
    <div className="login">
      <form onSubmit={handleLogin} className="login-form" action="" method="post">
        <input onChange={handleFieldChange} type="email" name="email" id="email" placeholder="Email" value={fields.email} />
        <input onChange={handleFieldChange} type="password" name="password" id="password" placeholder="Password" value={fields.password} />
        <input type="submit" value="Login" />
      </form>
    </div>
  )
};

export default Login;
