import { AuthOptionProps } from "@codeBase/interface/authOption";
import { Whatsapp } from "iconsax-react";
import { Button } from "primereact/button";
import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
const SendOtp: React.FC<AuthOptionProps> = ({
  formValue,
  setFormValue,
  setSendOtp,
}) => {
  return (
    <>
      <div className="phone-div">
        <label htmlFor="phone">Enter Your WhatsApp Number</label>
        <div className={"phone-container"}>
          <PhoneInput
            country="us"
            value={formValue.phone}
            onChange={(e: any) => {
              setFormValue((prev) => ({ ...prev, phone: e }));
            }}
          />
        </div>
      </div>
      <Button
        className="primary-button"
        onClick={() => {
          setSendOtp && setSendOtp((prev) => !prev);
        }}
      >
        <Whatsapp color="#37d67a" variant="Bold" size={20} />
        <div>Login with WhatsApp</div>
      </Button>
    </>
  );
};

export default SendOtp;
