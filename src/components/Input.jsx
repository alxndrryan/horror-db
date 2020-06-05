import React from "react";

function Input(props) {
  return (
    <div>
      <label for={props.for} className="sr-only">
        {props.name}
      </label>
      <input
        name={props.name}
        className="form-control custom-input"
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        required={props.required}
        autoComplete={props.autoComplete}
        onChange={props.onChange}
      />
    </div>
  );
}

export default Input;
