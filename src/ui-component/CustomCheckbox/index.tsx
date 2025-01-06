import { CustomCheckboxProps } from "@codeBase/interface/customCheckbox";
import { Checkbox } from "primereact/checkbox";
import React from "react";

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  id,
  name,
  checked,
  onChange,
  label,
  className,
}) => {
  return (
    <div className={className}>
      <Checkbox
        inputId={id}
        name={name}
        onChange={(e) => {
          return onChange(e);
        }}
        checked={checked}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default CustomCheckbox;
