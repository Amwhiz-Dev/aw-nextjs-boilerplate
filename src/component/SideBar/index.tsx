// React
import type React from "react";

// Next.js
import Link from "next/link";

// PrimeReact
import { Ripple } from "primereact/ripple";

// Styles
import style from "./SideBar.module.scss";

// Store / Hooks
import { useSideBar } from "./useSideBar";

// Types / Interfaces
import type { MenuItem } from "@template/interface/sideBar.interface";

// App Data
import { sideMenu } from "@template/common/sideMenu";

const SideBar: React.FC = () => {
  const { t, isItemActive } = useSideBar();

  const RenderChildren: React.FC<{ item: MenuItem }> = ({ item }) => {
    const isRead = isItemActive(item);
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

export default SideBar;
