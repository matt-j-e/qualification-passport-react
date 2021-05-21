import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import authenticateUser from "../requests/authenticateUser";
import firebase from "firebase/app";
import firebaseConfig from "../firebase";

firebase.initializeApp(firebaseConfig);

const Login = () => {
  const { setUser } = useContext(AuthContext);

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
        // response is a JSON object with the property 'data' that
        // holds the custom JWT returned from Firebase Admin
        firebase.auth().signInWithCustomToken(response.data)
          .then((userCredential) => {
            console.log(userCredential);
            setUser(userCredential);
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
