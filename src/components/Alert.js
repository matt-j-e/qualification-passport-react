import React from "react";
import PropTypes from "prop-types";

import { StyledAlert } from "../styles/Alert";

const Alert = ({ message, success }) => {
  if (!message) return "";
  return success ? <StyledAlert className="alert">{message}</StyledAlert> : <StyledAlert className="alert">{message}</StyledAlert>;
};

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  success: PropTypes.bool,
};

Alert.defaultProps = {
  success: false,
};

export default Alert;
