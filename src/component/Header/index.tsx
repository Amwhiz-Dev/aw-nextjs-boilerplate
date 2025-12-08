// React
import type React from "react";

// Styles
import style from "./Header.module.scss";

// Components
import { Button } from "primereact/button";
import { OverlayPanel } from "primereact/overlaypanel";
import ThemeSwitcher from "./ThemeSwitcher";
import LanguageSwither from "./LanguageSwitcher";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

// Icons
import { SignoutIcon } from "../icons";
import MenuIcon from "../icons/Menu";

// Hooks
import { useHeader } from "./useHeader";
import { useSideBar } from "../SideBar/useSideBar";

// Enums
import { SideBar } from "@template/enum/sideBar.enum";

// Types
import type { UserButtonProps } from "@template/interface/header.interface";
import { HeaderActionsProps } from "@template/interface/headerActionsProp.interface";

// Single responsibility: render user button
const UserButton: React.FC<UserButtonProps> = ({
  className,
  onClick,
  children,
}) => {
  return (
    <Button className={className} onClick={onClick}>
      {children}
    </Button>
  );
};

// Single responsibility: render header UI
const Header: React.FC<HeaderActionsProps> = ({ showSideBar }) => {
  const { overlayRef, handleLogout, toggleOverlay, getUserInitial } =
    useHeader();
  const { t } = useSideBar();

  return (
    <div className={style.container}>
      <div className={style.pageInfo}>
        <span onClick={showSideBar} className={style.sidebarToggle}>
          <MenuIcon />
        </span>
        <span className={`custom_breadcrumbs ${style.breadcrumbs}`}>
          <Breadcrumbs showIcon={false} />
        </span>
      </div>
      <UserButton className="user-button-color" onClick={toggleOverlay}>
        {getUserInitial()}
      </UserButton>
      <OverlayPanel ref={overlayRef} className="overlay-container">
        <div className="overlay-fields">
          <LanguageSwither />
          <ThemeSwitcher />
        </div>
        <Button className="logout-btn" onClick={handleLogout}>
          <SignoutIcon />
          <div className="label">{SideBar.logout}</div>
        </Button>
      </OverlayPanel>
    </div>
  );
};

export default Header;
