import React from "react";

const Input = (props) => {
  const {
    placeholder,
    name,
    value,
    type,
    onChange,
    error = null,
    ...other
  } = props;
  return (
    <input
      className="form__input"
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      type={type}
      {...other}
      {...(error && { error: true, helperText: error })}
    />
  );
};

export default Input;
