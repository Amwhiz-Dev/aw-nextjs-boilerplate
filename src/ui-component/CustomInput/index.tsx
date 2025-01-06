import { CustomInputProps } from "@codeBase/interface/customInput";
import { InputText } from "primereact/inputtext";
import React from "react";

const CustomInput: React.FC<CustomInputProps> = ({
  name,
  type,
  id,
  value,
  onChange,
  className,
  required,
  label,
  readonly,
  disable,
  error,
  placeHolder,
}) => {
  return (
    <div className={`p-field ${className} relative`} key={id}>
      {label && (
        <label htmlFor={id} className={`label`}>
          <span className={`${required && "required"}`}></span> {label}
        </label>
      )}
      <InputText
        id={id}
        placeholder={placeHolder}
        value={value}
        name={name}
        readOnly={readonly}
        disabled={disable}
        type={type}
        onChange={(e: any) => {
          return onChange(e);
        }}
      />
    </div>
  );
};

export default CustomInput;
