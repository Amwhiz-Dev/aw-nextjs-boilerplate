import { AuthOptionProps } from "@codeBase/src/interface/authOption";
import { Button } from "primereact/button";
import { InputOtp } from "primereact/inputotp";
import React from "react";
import { useRouter } from "next/router";
const VerifyOtp: React.FC<AuthOptionProps> = ({ formValue, setFormValue }) => {
  const router = useRouter();
  return (
    <div className="otp-field">
       <label htmlFor="phone">Enter OTP</label>
      <InputOtp
        value={formValue.otp}
        length={6}
        onChange={(e) => setFormValue((prev) => ({ ...prev, otp: e.value }))}
      />
      <Button className="primary-button" onClick={() => router.push("/portal")}>
        <div>Verify OTP</div>
      </Button>
    </div>
  );
};

export default VerifyOtp;
