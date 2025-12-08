import React from "react";
import { Password } from "primereact/password";

const CustomPassword = ({
  id,
  label,
  name,
  value,
  required,
  onChange,
}: any) => {
  return (
    <div className="p-field flex flex-column gap-2">
      {label && (
        <label htmlFor={id} className={`label ${required && "required"}`}>
          {label}
        </label>
      )}
      <Password
        id={id}
        name={name}
        value={value}
        onChange={(e) => onChange(e)}
        toggleMask
        className="w-full"
      />
    </div>
  );
};

export default CustomPassword;
