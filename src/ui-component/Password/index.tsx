import { CustomPasswordInputProps } from "@codeBase/src/interface/customPassword";
import { passwordValidation } from "@codeBase/src/utils/globalHelper";
import { Divider } from "primereact/divider";
import { Password } from "primereact/password";
import React, { useMemo, useState } from "react";
import { footer } from "./Footer";

const header = <div className="font-bold mb-3">Pick a password</div>;

const CustomPasswordInput: React.FC<CustomPasswordInputProps> = ({
  name,
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
  const [password, setPassword] = useState<string>("");
  const [passValid, setPassValid] = useState<Record<string, boolean>>();
  return (
    <div className={`p-field ${className} relative`} key={id}>
      {label && (
        <label htmlFor={id} className={`label`}>
          <span className={`${required && "required"}`}></span> {label}
        </label>
      )}
      <Password
        id={id}
        placeholder={placeHolder}
        name={name}
        readOnly={readonly}
        disabled={disable}
        value={password || value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const values = e.target.value;
          setPassword(values);
          setPassValid(passwordValidation(values));
          return onChange(e);
        }}
        header={header}
        footer={() => footer(passValid)}
      />
    </div>
  );
};

export default CustomPasswordInput;
