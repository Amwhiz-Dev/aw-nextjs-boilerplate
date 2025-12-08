"use client";

import type React from "react";
import { useEffect } from "react";

// Components
import Header from "@template/component/Header";
import Sidebar from "@template/component/SideBar";

// Store
import { useAppStore } from "@template/store/useAppStore";

// Context
import { useToast } from "@template/context/ToastContext";

// Styles
import style from "./Layout.module.scss";

// Type
import type { LayoutProps } from "@template/interface/layoutProps.interface";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { appData, updation } = useAppStore();

  //  Sidebar Toggle
  const toggleSidebar = () => {
    updation({ sideBarOpen: !appData?.sideBarOpen });
  };

  return (
    <div className={style.container}>
      {/* Sidebar */}
      <div
        className={`${style.sidebarContainer} ${
          appData?.sideBarOpen ? style.sidebarOpen : ""
        }`}
      >
        <Sidebar />
      </div>

      {/* Main Content */}
      <div
        className={`${style.mainContainer} ${
          appData?.sideBarOpen ? style.mainContainerSidebarOpen : ""
        }`}
      >
        <Header showSideBar={toggleSidebar} />
        <main className={style.content}>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
