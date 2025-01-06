import LoginModuleLayout from "@codeBase/src/layout/Login";
import React, { useState } from "react";
import VerifyOtp from "./FormElements/VerifyOtp";
import SendOtp from "./FormElements/SendOtp";

const LoginWithOtpModule = () => {
  const [formValue, setFormValue] = useState<Record<string, any>>({});
  const [sendOtp, setSendOtp] = useState(false);
  return (
    <LoginModuleLayout
      title="Login"
      discription="Welcome back. Enter your WhatsApp number to receive OTP on your registered Mobile number"
    >
      {!sendOtp ? (
        <SendOtp
          formValue={formValue}
          setFormValue={setFormValue}
          setSendOtp={setSendOtp}
        />
      ) : (
        <VerifyOtp formValue={formValue} setFormValue={setFormValue} />
      )}
    </LoginModuleLayout>
  );
};

export default LoginWithOtpModule;
