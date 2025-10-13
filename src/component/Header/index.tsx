import type React from "react";
import style from "./Header.module.scss";
import { Button } from "primereact/button";
import { OverlayPanel } from "primereact/overlaypanel";
import ThemeSwitcher from "./ThemeSwitcher";
import { SideBar } from "@template/enum/sidebar.enum";
import LanguageSwither from "./LanguageSwitcher";
import { SignoutIcon } from "../icons";
import { useHeader } from "./useHeader";
import type { UserButtonProps } from "@template/interface/header.interface";

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
const Header = () => {
  const { overlayRef, handleLogout, toggleOverlay, getUserInitial } =
    useHeader();

  return (
    <div className={style.container}>
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
