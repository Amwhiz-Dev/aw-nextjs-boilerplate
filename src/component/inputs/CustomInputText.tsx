"use client";

import React from "react";
import { InputText } from "primereact/inputtext";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";

interface Props {
  id?: string;
  name?: string;
  label?: string;
  placeholder?: string;
  value?: string;
  type?: string;
  required?: boolean;
  requiredLabel?: boolean;
  integerOnly?: boolean;
  className?: string;
  disable?: boolean;
  readOnly?: boolean;
  clearField?: boolean;
  search?: boolean;
  keyFilter?: any;
  validateOnly?: boolean;
  onInput?: (e: any) => void;
  onPaste?: (e: any) => void;
  keyBoardEvent?: (e: any) => void;
  onChange: (e: any) => void;
}

const CustomInputText: React.FC<Props> = ({
  id,
  name,
  label,
  placeholder,
  value = "",
  type = "text",
  required,
  requiredLabel,
  integerOnly,
  className = "",
  clearField,
  disable,
  readOnly,
  search,
  keyFilter,
  validateOnly,
  onInput,
  keyBoardEvent,
  onChange,
}) => {
  const showClear = value?.length > 0 && clearField;

  function clearData(e: any) {
    e.target.name = name;
    e.target.id = id;
    e.value = "";
    e.target.value = "";
    onChange(e);
  }

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    let inputValue = e.target.value;

    if (integerOnly) {
      const regex = name === "height" ? /[^0-9.']/g : /[^0-9.]/g;
      inputValue = inputValue.replace(regex, "");
    }

    e.target.value = inputValue;
    onChange(e);
  }

  const inputField = (
    <InputText
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      disabled={disable}
      readOnly={readOnly}
      onChange={handleInput}
      onKeyUp={keyBoardEvent}
      keyfilter={keyFilter}
      validateOnly={validateOnly}
      onInput={onInput}
      className="w-full"
      maxLength={100}
    />
  );

  return (
    <div className={`p-field relative ${className}`}>
      {label && (
        <label htmlFor={id} className={`label ${required ? "required" : ""}`}>
          {requiredLabel && <span className="required">*</span>} {label}
        </label>
      )}

      {search ? (
        <IconField iconPosition="left">
          <InputIcon className="pi pi-search" />
          {inputField}
        </IconField>
      ) : (
        inputField
      )}

      {showClear && (
        <div
          className="flex cursor-pointer"
          style={{
            position: "absolute",
            right: "10px",
            bottom: "0px",
            height: "40px",
            alignItems: "center",
          }}
          onClick={clearData}
        >
          <i className="pi pi-times clear_icon"></i>
        </div>
      )}
    </div>
  );
};

export default CustomInputText;
