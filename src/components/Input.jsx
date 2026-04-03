import React from "react";
import "./Input.css";

function Input({ label, state, setState, placeholder, type }) {
  return (
    <div className="Input-wrapper">
      <p className="label-input">{label}</p>
      <input
        value={state}
        type={type}
        placeholder={placeholder}
        onChange={(e) => setState(e.target.value)}
        className="input-field"
      />
    </div>
  );
}

export default Input;
