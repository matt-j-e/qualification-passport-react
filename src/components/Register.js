import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import firebase from "firebase/app";
import Alert from "./Alert";
import postWorker from "../requests/postWorker";

import { 
  PageWrapper,
  ImageWrapper,
  BrandingWrapper,
  ContentWrapper,
  FormWrapper,
  Form,
  SignInLinkWrapper,
  GuestLinkWrapper
} from "../styles/Register";

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
    <PageWrapper className="register">
      <ContentWrapper>
      <BrandingWrapper>
        <span className="register__logo">qp</span>
        <span className="register__name">qualpass</span>
        <p className="register__strapline">Take the pain out of tracking your qualifications</p>
      </BrandingWrapper>
      <FormWrapper>
      <h2>Create an account</h2>
      <Alert message={alert.message} />
      <Form onSubmit={handleSubmit} className="register-form" action="" method="post">
        
        <label htmlFor="firstname">First name</label>
        <div>
          <input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="First name"
            value={fields.firstname}
            autoFocus
            onChange={handleFieldChange}
          />
        </div>

        <label htmlFor="lastname">Last name</label>
        <div>
          <input
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Last name"
            value={fields.lastname}
            onChange={handleFieldChange}
          />
        </div>

        <label htmlFor="job">Job title</label>
        <div>
          <input
            type="text"
            name="job"
            id="job"
            placeholder="Job title"
            value={fields.job}
            onChange={handleFieldChange}
          />
        </div>
        
        <label htmlFor="email">Email address</label>
        <div>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email address"
            value={fields.email}
            onChange={handleFieldChange}
          />
        </div>
        
        <label htmlFor="password">Password</label>
        <div>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={fields.password}
            onChange={handleFieldChange}
          />
        </div>
        
        <label htmlFor="passwordRepeat">Repeat password</label>
        <div>
          <input
            type="password"
            name="passwordRepeat"
            id="passwordRepeat"
            placeholder="Repeat password"
            value={fields.passwordRepeat}
            onChange={handleFieldChange}
          />
        </div>
        
        <div>
          <input type="submit" value="Sign Up" />
        </div>

        <SignInLinkWrapper className="account-already">
          <p>Already have an account?</p><Link to="/login">Sign in</Link>
        </SignInLinkWrapper>
        <GuestLinkWrapper className="continue-as-guest">
          <p><Link to="/workers">Continue as a guest</Link></p>
        </GuestLinkWrapper>
      </Form>
      </FormWrapper>
      
      </ContentWrapper>
      <ImageWrapper />
    </PageWrapper>
  )
}

export default Register;
