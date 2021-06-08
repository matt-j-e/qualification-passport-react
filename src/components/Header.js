import React, { useContext } from "react";
import firebase from "firebase/app";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

import { BrandingWrapper } from "../styles/Register";
import { HeaderWrapper, NavWrapper, NavList, NavListItem, NavListSignOut, NavListSignOutButton } from "../styles/Header";

const Header = () => {
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
    }).catch((error) => {
      console.log(error);
    });
  }

  return (
    <HeaderWrapper>
      <BrandingWrapper>
        <span className="register__logo">qp</span>
        <span className="register__name">qualpass</span>
      </BrandingWrapper>
      <NavWrapper>
        <NavList>
          <NavListItem><Link to="/workers">Workers</Link></NavListItem>
          {!user ? (
            <>
            <NavListItem><Link to="/">Register</Link></NavListItem>
            <NavListItem><Link to="/login">Login</Link></NavListItem>
            </>
          ) : (
            <>
            <NavListItem><Link to={`/worker/${user.uid}`}>Your Profile</Link></NavListItem>
            <NavListSignOut>
              <span>{user.email}</span>  
              <NavListSignOutButton type="button" onClick={handleLogout}>Sign Out</NavListSignOutButton>
            </NavListSignOut>
            </>
          )}
        </NavList>
      </NavWrapper>
    </HeaderWrapper>
  )
};

export default Header;
