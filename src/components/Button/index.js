import React from "react";
import PropTypes from "prop-types";
import "./button.css";

const Button = ({ buttonText, handleClick }) => {
  return (
    <button onClick={handleClick} className="btn">
      {buttonText}
    </button>
  );
};

Button.defaultProps = {
  buttonText: "I'm so bored!",
};

Button.propTypes = {
  buttonText: PropTypes.string,
  handleClick: PropTypes.func,
};

export default Button;
