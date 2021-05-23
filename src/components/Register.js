import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import firebase from "firebase/app";
import postWorker from "../requests/postWorker";

const Register = () => {
  const { setUser } = useContext(AuthContext);

  const initialState = {
    fields: {
      firstname: "",
      lastname: "",
      job: "",
      email: "",
      password: "",
      firebaseUID: "",
      passwordRepeat: "",
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

  const handleSubmit = (event) => {
    event.preventDefault();
    if (fields.password === fields.passwordRepeat) {
      firebase.auth().createUserWithEmailAndPassword(fields.email, fields.password)
      .then((userCredential) => {
        // Signed in 
        console.log(userCredential);
        console.log(fields);
        setUser(userCredential);
        postWorker({
          firstname: fields.firstname,
          lastname: fields.lastname,
          job: fields.job,
          email: fields.email,
          firebaseUID: userCredential.user.uid,
        });
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
    }
  };

  return (
    <div className="register">
      <form onSubmit={handleSubmit} className="register-form" action="" method="post">
        <input
          type="text"
          name="firstname"
          id="firstname"
          placeholder="First name"
          value={fields.firstname}
          onChange={handleFieldChange}
        />
        <input
          type="text"
          name="lastname"
          id="lastname"
          placeholder="Last name"
          value={fields.lastname}
          onChange={handleFieldChange}
        />
        <input
          type="text"
          name="job"
          id="job"
          placeholder="Job title"
          value={fields.job}
          onChange={handleFieldChange}
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={fields.email}
          onChange={handleFieldChange}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={fields.password}
          onChange={handleFieldChange}
        />
        <input
          type="password"
          name="passwordRepeat"
          id="passwordRepeat"
          placeholder="Repeat password"
          value={fields.passwordRepeat}
          onChange={handleFieldChange}
        />
        <input type="submit" value="Register" />
      </form>
    </div>
  )
}

export default Register;
