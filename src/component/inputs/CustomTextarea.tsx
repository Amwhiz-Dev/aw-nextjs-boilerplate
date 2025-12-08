import React from "react";
import { InputTextarea } from "primereact/inputtextarea";

interface Props {
  id?: string;
  label?: string;
  name?: string;
  value?: string;
  rows?: number;
  placeholder?: string;
  required?: boolean;
  onChange: (e: any) => void;
  className?: string;
}

const CustomTextarea: React.FC<Props> = ({
  id,
  label,
  name,
  value = "",
  rows = 3,
  placeholder,
  required,
  className = "",
  onChange,
}) => {
  return (
    <div className={`p-field flex flex-column gap-2 ${className}`}>
      {label && (
        <label className={`label ${required && "required"}`} htmlFor={id}>
          {label}
        </label>
      )}
      <InputTextarea
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        rows={rows}
        onChange={(e) => onChange(e)}
        className="w-full"
      />
    </div>
  );
};

export default CustomTextarea;
