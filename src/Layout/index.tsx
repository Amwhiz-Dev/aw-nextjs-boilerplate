import Header from "@template/component/Header";
import Sidebar from "@template/component/SideBar";
import type React from "react";
import style from "./Layout.module.scss";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={style.container}>
      <Sidebar />
      <div className={style.main_container}>
        <Header />
        <main className={style.content}>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
