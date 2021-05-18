import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

const AwardCard = ({ name, awardingBody, awardDate, expiryDate }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{awardingBody}</td>
      <td>{awardDate}</td>
      <td>{expiryDate}</td>
    </tr>
  )
};

AwardCard.propTypes = {
  name: PropTypes.string.isRequired,
  awardingBody: PropTypes.string.isRequired,
  awardDate: PropTypes.string.isRequired,
  expiryDate: PropTypes.string.isRequired,
};

export default AwardCard;
