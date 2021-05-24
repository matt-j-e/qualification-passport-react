import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import firebase from "firebase/app";
import Alert from "./Alert";
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
      passwordRepeat: "",
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
          id: userCredential.user.uid,
        })
        .then((response) => {
          if (response.status === 201) {
            setAlert({
              message: "Your account is created and you are logged in",
              isSuccess: true,
            })
          } else {
            setAlert({
              message: "A server error occurred. Please try again.",
            });
            const failedReg = firebase.auth().currentUser;
            failedReg.delete();
          }
        })
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
        setAlert({
          message: errorMessage,
        })
      });
    } else {
      setAlert({
        message: "The two passwords didn't match. Please try again."
      })
    }
  };

  return (
    <div className="register">
      <h2>Register an account</h2>
      <Alert message={alert.message} />
      <form onSubmit={handleSubmit} className="register-form" action="" method="post">
        <div>
          <label htmlFor="firstname">
            First name
            <input
              type="text"
              name="firstname"
              id="firstname"
              placeholder="First name"
              value={fields.firstname}
              onChange={handleFieldChange}
            />
          </label>
        </div>

        <div>
          <label htmlFor="lastnname">
            Last name
            <input
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Last name"
              value={fields.lastname}
              onChange={handleFieldChange}
            />
          </label>
        </div>

        <div>
          <label htmlFor="job">
            Job title
            <input
              type="text"
              name="job"
              id="job"
              placeholder="Job title"
              value={fields.job}
              onChange={handleFieldChange}
            />
          </label>
        </div>
        
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
        
        <div>
          <label htmlFor="passwordRepeat">
            Repeat password
            <input
              type="password"
              name="passwordRepeat"
              id="passwordRepeat"
              placeholder="Repeat password"
              value={fields.passwordRepeat}
              onChange={handleFieldChange}
            />
          </label>
        </div>
        
        <input type="submit" value="Register" />
      </form>
    </div>
  )
}

export default Register;
