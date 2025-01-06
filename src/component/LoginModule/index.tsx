import React, { useState } from "react";
import style from "@codeBase/src/component/LoginModule/login.module.scss";
import LoginModuleLayout from "@codeBase/src/layout/Login";
import CustomInput from "@codeBase/src/ui-component/Input";
import CustomPasswordInput from "@codeBase/src/ui-component/Password";
import { ArrowRight } from "iconsax-react";
import { Button } from "primereact/button";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { updateUser } from "@codeBase/src/state-management/redux/slice/user";

const LoginWithPassModule = () => {
  const [formValue, setFormValue] = useState<Record<string, any>>({});
  const router = useRouter();
  const dispatch = useDispatch();

  const submitForm = () => {
    dispatch(
      updateUser({
        email: formValue?.email ?? "",
        userName: formValue?.password ?? "",
      })
    );
    router.push("/portal/dashboard");
  };
  return (
    <LoginModuleLayout title="Login">
      <div className={style.login_pass_module}>
        <CustomInput
          name={"email"}
          type={"email"}
          id={"mail"}
          value={formValue?.email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setFormValue((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }));
          }}
          className={"dashboard-inputs"}
          required={false}
          label={"Email address"}
        />
        <CustomPasswordInput
          name={"password"}
          id={"password"}
          value={formValue?.password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setFormValue((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }));
          }}
          className={"dashboard-pass-inputs"}
          required={false}
          label={"Password"}
        />
        {/* <AuthOptions formValue={formValue} setFormValue={setFormValue} /> */}
        <Button className="primary-button" onClick={submitForm}>
          Sign in
          <ArrowRight color="#ffffff" size={18} />
        </Button>
      </div>
    </LoginModuleLayout>
  );
};

export default LoginWithPassModule;
