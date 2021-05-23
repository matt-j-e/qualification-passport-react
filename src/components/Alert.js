import React from "react";
import PropTypes from "prop-types";

const Alert = ({ message, success }) => {
  if (!message) return "";
  return success ? <div>{message}</div> : <div>{message}</div>;
};

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  success: PropTypes.bool,
};

Alert.defaultProps = {
  success: false,
};

export default Alert;
