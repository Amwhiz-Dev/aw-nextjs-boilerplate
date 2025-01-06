import React, { ReactNode } from "react";
import style from "@codeBase/layout/LoginModule/login.module.scss";
const LoginModuleLayout: React.FC<{
  children: ReactNode;
  title: string;
  discription?: string;
}> = ({ children, title, discription }) => {
  return (
    <div className={style.login_container}>
      <div className={style.module_contaier}>
        <div className={style.title}>{title}</div>
        {discription ? (
          <div className={style.discription}>{discription}</div>
        ) : (
          <></>
        )}

        {children}
      </div>
    </div>
  );
};

export default LoginModuleLayout;
