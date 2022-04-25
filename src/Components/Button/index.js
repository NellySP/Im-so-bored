import React from "react";
import PropTypes from "prop-types";
import "./button.css";

const Button = ({ buttonText }) => {
  return <button className="btn">{buttonText}</button>;
};

Button.propTypes = {
  buttonText: PropTypes.string,
};

Button.defaultProps = {
  buttonText: "I'm so bored!",
  buttonText2: "I'm so GLAD!",
};

export default Button;
