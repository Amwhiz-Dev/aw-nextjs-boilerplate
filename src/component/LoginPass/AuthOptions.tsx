import React from "react";
import style from "@codeBase/component/LoginPass/login.module.scss";
import CustomCheckbox from "@codeBase/ui-component/CustomCheckbox";
import { AuthOptionProps } from "@codeBase/interface/authOption";

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
        onChange={(event) =>
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
