import { CustomPasswordInputProps } from "@codeBase/src/interface/customPassword";
import {
  generateRandomPassword,
  passwordValidation,
} from "@codeBase/src/utils/globalHelper";
import { Password } from "primereact/password";
import React, { useState } from "react";
import { footer } from "./Footer";
import { Checkbox } from "primereact/checkbox";

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
  placeHolder,
  isShowfeedback,
  error,
  genaratePassword = false,
  toggleMask = false,
  editPassword = false,
}) => {
  const [password, setPassword] = useState<string>("");
  const [passValid, setPassValid] = useState<Record<string, boolean>>();
  const [editPass, setPass] = useState(editPassword ? false : true);
  const generatePass = (e: any) => {
    const passKey = generateRandomPassword();
    setPassword(passKey);
    onChange({ ...e, target: { name: name, value: passKey } });
  };
  return (
    <div className={`p-field ${className} relative`} key={id}>
      <div className="generate-pass">
        {label && (
          <label htmlFor={id} className={`label`}>
            <span className={`${required && "required"}`}></span>{" "}
            {editPassword ? (
              <Checkbox
                inputId={id}
                name={name}
                onChange={(event: any) => setPass(event.checked)}
                checked={editPass}
              />
            ) : (
              <></>
            )}
            {editPassword ? `Edit ${label}` : label}
          </label>
        )}
        {genaratePassword ? (
          <div
            className={
              genaratePassword && editPass ? "active-pass" : "in-active-pass"
            }
            onClick={(e) => editPass && generatePass(e)}
          >
            {label?.includes("OTP")
              ? "Generate " + label
              : " Generate password"}
          </div>
        ) : (
          <></>
        )}
      </div>
      <Password
        id={id}
        placeholder={placeHolder}
        name={name}
        readOnly={readonly}
        disabled={editPassword ? !editPass : disable}
        value={password || value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const values = e.target.value;
          setPassword(values);
          setPassValid(passwordValidation(values));
          onChange(e);
        }}
        toggleMask={toggleMask}
        feedback={isShowfeedback}
        header={header}
        footer={footer(passValid)}
      />
      {error ? <div className="error">Enter valid {id}</div> : <></>}
    </div>
  );
};

export default CustomPasswordInput;
