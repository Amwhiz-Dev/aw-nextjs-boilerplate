import React from "react";
import { InputNumber } from "primereact/inputnumber";

const CustomNumber = ({
  id,
  label,
  value,
  name,
  required,
  placeholder,
  className = "",
  onChange,
}: any) => {
  return (
    <div className={`p-field flex flex-column gap-2 ${className}`}>
      {label && (
        <label className={`label ${required && "required"}`} htmlFor={id}>
          {label}
        </label>
      )}

      <InputNumber
        id={id}
        value={value}
        onValueChange={(e) => onChange(e)}
        placeholder={placeholder}
        className="w-full"
      />
    </div>
  );
};

export default CustomNumber;
