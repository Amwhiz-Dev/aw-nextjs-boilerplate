"use client";

import type React from "react";
import style from "./Header.module.scss";

// ShadCN
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
} from "@/ui/menubar";

// Components
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

// Icons
import { SignoutIcon } from "../icons";
import MenuIcon from "../icons/Menu";

// Hooks
import { useHeader } from "./useHeader";

// Enums
import { SideBar } from "@template/enum/sideBar.enum";

// Props
import type { HeaderActionsProps } from "@template/interface/headerActionsProp.interface";
import { useAuth } from "@/context/AuthContext";

const Header: React.FC<HeaderActionsProps> = ({ showSideBar }) => {
  const { getUserInitial } = useHeader();
  const { user, logout } = useAuth();

  return (
    <div className={style.container}>
      {/* Left Section */}
      <div className={style.pageInfo}>
        <span onClick={showSideBar} className={style.sidebarToggle}>
          <MenuIcon />
        </span>

        <span className={`custom_breadcrumbs ${style.breadcrumbs}`}>
          <Breadcrumbs showIcon={false} />
        </span>
      </div>

      {/* Right Section - Menubar */}
      <Menubar className="border-none shadow-none bg-white ml-auto">
        <MenubarMenu>
          <MenubarTrigger className="user-button-color cursor-pointer rounded-full w-10 h-10 flex items-center justify-center">
            {getUserInitial()}
          </MenubarTrigger>

          <MenubarContent className="p-4 w-64 space-y-4">
            <div className="userData p-2 rounded-md text-gray-800 flex flex-col gap-1">
              <span className="font-semibold">{user?.name}</span>
              <span className="text-sm text-gray-600">
                {user?.role || "Admin"}
              </span>
            </div>
            {/* Language */}
            <MenubarItem className="p-0 hover:bg-transparent focus:bg-transparent">
              <LanguageSwitcher />
            </MenubarItem>

            {/* Theme */}
            <MenubarItem className="p-0 hover:bg-transparent focus:bg-transparent">
              <ThemeSwitcher />
            </MenubarItem>

            <MenubarSeparator />

            {/* Logout */}
            <MenubarItem
              onClick={logout}
              className="logout-btn flex items-center gap-2 cursor-pointer"
            >
              <SignoutIcon />
              <span>{SideBar.logout}</span>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
};

export default Header;
