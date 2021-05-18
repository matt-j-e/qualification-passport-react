import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const WorkerCard = ({ id, firstname, lastname, job }) => {
  const path = "/worker/" + id;
  return (
    <li>
      {firstname} {lastname} {job}
      <Link to={path}>Profile</Link>
    </li>
  )
};

WorkerCard.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
};

export default WorkerCard;
