import React from "react";
import "../css/button.css"

const Button = ({ btnname }) => {
  return (
    <div >
      <button>
        {btnname}
      </button>
    </div>
  );
};

export default Button;

