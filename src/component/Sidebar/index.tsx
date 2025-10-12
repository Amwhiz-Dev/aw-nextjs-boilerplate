import type React from "react";
import style from "./Sidebar.module.scss";
import Link from "next/link";
import { Ripple } from "primereact/ripple";
import { sideMenu } from "@template/common/sideMenu";
import { useNavigation } from "@template/hooks/useNavigation";
import { useTranslation } from "react-i18next";
import type { MenuItem } from "@template/interface/sidenav.interface";

const Sidebar: React.FC = () => {
  const { pathname } = useNavigation();
  const { t } = useTranslation("common");
  const RenderChildren: React.FC<{ item: MenuItem }> = ({ item }) => {
    const isRead = item?.active?.includes(pathname);
    return (
      <Link
        href={item.to ?? "#"}
        className={`${style.items} ${isRead ? style.item_active : ""}`}
      >
        <span>{t(item.label)}</span>
        <Ripple />
      </Link>
    );
  };
  return (
    <div className={style.main_sidenav}>
      <div className={style.logo}>LOGO</div>
      <nav className={style.nav_container}>
        {sideMenu.map((group, inx: number) => (
          <ul className={style.list} key={group.label}>
            {group.isGroupHead ? (
              <>
                <li key={`${group.label}${inx}`}>
                  <div className={style.groupHeader}>
                    <span>{t(group.label)}</span>
                    <Ripple />
                  </div>
                </li>
                {group.children?.length
                  ? group.children.map((child) => (
                      <li key={`${child.label}${inx}`}>
                        <RenderChildren key={child.label} item={child} />
                      </li>
                    ))
                  : null}
              </>
            ) : (
              <li key={group.label}>
                <RenderChildren key={group.label} item={group} />
              </li>
            )}
          </ul>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
