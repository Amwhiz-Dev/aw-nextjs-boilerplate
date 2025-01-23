import React, { useState } from "react";
import style from "@codeBase/src/component/LoginPass/login.module.scss";
import LoginModuleLayout from "@codeBase/src/layout/Login";
import CustomInput from "@codeBase/src/ui-component/Input";
import CustomPasswordInput from "@codeBase/src/ui-component/Password";
import AuthOptions from "./AuthOptions";
import { ArrowRight } from "iconsax-react";
import { Button } from "primereact/button";
import { useRouter } from "next/router";

const LoginWithPassModule = () => {
  const [formValue, setFormValue] = useState<Record<string, any>>({});
  const router = useRouter();

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
          name={"pass"}
          id={"pass"}
          value={formValue?.email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setFormValue((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }));
          }}
          className={"dashboard-pass-inputs"}
          required={false}
          isShowfeedback={false}
          label={"Password"}
        />
        <AuthOptions formValue={formValue} setFormValue={setFormValue} />
        <Button
          className="primary-button"
          onClick={() => router.push("/portal")}
        >
          Sign in
          <ArrowRight color="#ffffff" size={18} />
        </Button>
      </div>
    </LoginModuleLayout>
  );
};

export default LoginWithPassModule;
