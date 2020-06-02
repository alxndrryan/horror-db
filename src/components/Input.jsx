import React from "react";

function Input(props) {
  return (
    <div>
      <label for={props.for} className="sr-only">
        {props.name}
      </label>
      <input
        className="form-control custom-input"
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        required={props.required}
        autoComplete={props.autoComplete}
      />
    </div>
  );
}

export default Input;
