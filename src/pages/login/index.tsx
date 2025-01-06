import { appTitlte } from "@codeBase/src/common/appTitle";
import LoginWithPassModule from "@codeBase/src/component/LoginModule";
import React, { useEffect } from "react";

const LoginWithPassWord = () => {
  useEffect(() => {
    document.title = appTitlte.login;
  }, []);
  return <LoginWithPassModule />;
};

export default LoginWithPassWord;
