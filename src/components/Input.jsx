import React from "react";

function Input(props) {
  return (
    <div>
      <label for={props.for} className={props.sr}>
        {props.name}
      </label>
      <input
        type={props.type}
        id={props.id}
        className={props.className}
        placeholder={props.placeholder}
        required={props.required}
        autoComplete={props.autoComplete}
      />
    </div>
  );
}

export default Input;
