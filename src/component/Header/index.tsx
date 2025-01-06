import React, { useRef } from "react";
import { OverlayPanel } from "primereact/overlaypanel";
import { Button } from "primereact/button";
import style from "@codeBase/src/component/header/header.module.scss";
import UserIcon from "../icon/User";
import SettingIcon from "../icon/Setting";
import { LoginCurve } from "iconsax-react";
import { useRouter } from "next/router";
import { UserIconButton } from "@codeBase/src/interface/userIcon";
import { getUser } from "@codeBase/src/state-management/redux/slice/user";
import { RootState } from "@codeBase/src/state-management/redux/store";
import { useSelector } from "react-redux";
const TriggerUser: React.FC<UserIconButton> = ({ styleCode, ref }) => {
  return (
    <Button className={styleCode} onClick={(e) => ref.current?.toggle(e)}>
      <UserIcon />
    </Button>
  );
};

const UserProfile = () => {
  const op = useRef<OverlayPanel>(null);
  const router = useRouter();
  const userData = useSelector((state: RootState) => getUser(state));
  return (
    <>
      <TriggerUser styleCode="user-button" ref={op} />

      <OverlayPanel ref={op} className="overlay-container">
        <div className="overlay-profile">
          <TriggerUser styleCode="user-button-color" ref={op} />
          <div className="user-profile">
            <div className="name">{userData?.userName || "Fathima"}</div>
            <div className="email">{userData?.email || "fatima@email.com"}</div>
          </div>
        </div>
        <div className="set-container">
          <SettingIcon />
          <div className="setting-name">settings</div>
        </div>
        <Button
          className="logout-btn"
          onClick={(e) => {
            op.current?.toggle(e);
            router.push("/login");
          }}
        >
          <LoginCurve size="24" color="#000000" />
          <div className="label">login</div>
        </Button>
      </OverlayPanel>
    </>
  );
};

const Header: React.FC = () => {
  return (
    <div className={style.container}>
      <div className={style.logo_container}>
        {/* <Image src={logo} alt="logo" width={106} height={53} /> */}
        LOGO
      </div>
      <UserProfile />
    </div>
  );
};
export default Header;
