import React from "react";
import style from "@codeBase/src/component/LoginPass/login.module.scss";
import CustomCheckbox from "@codeBase/src/ui-component/Checkbox";
import { AuthOptionProps } from "@codeBase/src/interface/authOption";

const AuthOptions: React.FC<AuthOptionProps> = ({
  formValue,
  setFormValue,
}) => {
  return (
    <div className={style.forget_container}>
      <CustomCheckbox
        id={"remember"}
        name={"remember"}
        checked={formValue.remember}
        onChange={(event:any) =>
          setFormValue((prev) => ({
            ...prev,
            [event.target.name]: event.checked,
          }))
        }
        label={"Remember me"}
        className={"dashboard-checkbox"}
      />
      <div className={style.forget}>
      Forgot password?
      </div>
    </div>
  );
};

export default AuthOptions;
