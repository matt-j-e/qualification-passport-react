import React, { useContext } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import firebase from "firebase/app";
import { AuthContext } from "../context/AuthContext";

const AwardCard = ({ id, name, awardingBody, awardDate, expiryDate, handleDelete }) => {
  const { user, setUser } = useContext(AuthContext);
  const profileOwner = useLocation().pathname.split("/")[2];

  firebase.auth().onAuthStateChanged(function(firebaseUser) {
    if (firebaseUser) {
      setUser(firebaseUser);
    }
  });

  let currentUserId;
  user ? currentUserId = user.uid : currentUserId = "0";

  return (
    <tr data-award={id}>
      <td>{name}</td>
      <td>{awardingBody}</td>
      <td>{awardDate}</td>
      <td>{expiryDate}</td>
      {
        profileOwner === currentUserId
        && (<td><button type="button" data-id={id} onClick={handleDelete}>X</button></td>)
      }
    </tr>
  )
};

AwardCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  awardingBody: PropTypes.string.isRequired,
  awardDate: PropTypes.string.isRequired,
  expiryDate: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default AwardCard;
