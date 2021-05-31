import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import {
  WorkerListItem,
  WorkerName,
  WorkerJob
} from "../styles/WorkerCard";

const WorkerCard = ({ id, firstname, lastname, job }) => {
  const path = "/worker/" + id;
  return (
    <WorkerListItem>
      <span>
        <WorkerName>{firstname} {lastname}</WorkerName>
        <WorkerJob>{job}</WorkerJob>
      </span>
      <Link to={path}>Profile</Link>
    </WorkerListItem>
  )
};

WorkerCard.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
};

export default WorkerCard;
