import React, { useState, useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import firebase from "firebase/app";
import Alert from "./Alert";

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
        history.push("/alert/" + userCredential.user.uid);
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
    <PageWrapper className="login">
      <ContentWrapper>
      <BrandingWrapper>
        <span className="register__logo">qp</span>
        <span className="register__name">qualpass</span>
        <p className="register__strapline">Take the pain out of tracking your qualifications</p>
      </BrandingWrapper>
      <FormWrapper>
      <h2>Sign into your account</h2>
      <Alert message={alert.message} />
      <Form onSubmit={handleLogin} className="login-form" action="" method="post">
        
      <label htmlFor="email">Email address</label>
        <div>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email address"
            value={fields.email}
            autoFocus
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
        
        <div>
        <input type="submit" value="Sign in" />
        </div>

        <SignInLinkWrapper className="account-already">
          <p>Don't have an account?</p><Link to="/">Sign up</Link>
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
};

export default Login;
