import { useRef } from "react";
import type React from "react";
import style from "./header.module.scss";
import { Button } from "primereact/button";
import { OverlayPanel } from "primereact/overlaypanel";
import ThemeSwitcher from "./ThemeSwitcher";
import LogoutIcon from "../icons/logout";
import { SideNav } from "@template/enum/sideNav.enum";
import type { UserIconButton } from "@template/interface/userIcon";
import LanguageSwither from "./LanguageSwitcher";
import { useNavigation } from "@template/hooks/useNavigation";
import { useUserStore } from "@template/store/useCounterStore";

const TriggerUser: React.FC<UserIconButton> = ({
  styleCode,
  ref,
  userData,
}) => {
  return (
    <Button className={styleCode} onClick={(e) => ref.current?.toggle(e)}>
      {userData?.fullName?.substring(0, 1) ?? ""}
    </Button>
  );
};
const Header = () => {
  const op = useRef<any>(null);
  const { navigate } = useNavigation();
  const { userData } = useUserStore();
  return (
    <div className={style.container}>
      <TriggerUser
        styleCode="user-button-color"
        ref={op}
        userData={{ fullName: userData?.email }}
      />

      <OverlayPanel ref={op} className="overlay-container">
        <div className="overlay-fields">
          <LanguageSwither />
          <ThemeSwitcher />
        </div>
        <Button
          className="logout-btn"
          onClick={() => {
            navigate("/login");
          }}
        >
          <LogoutIcon />
          <div className="label">{SideNav.logout}</div>
        </Button>
      </OverlayPanel>
    </div>
  );
};

export default Header;