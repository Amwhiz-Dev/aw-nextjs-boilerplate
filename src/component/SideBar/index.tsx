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
import { logoutMenu, sideMenu } from "@template/common/sideMenu";

const SideBar: React.FC = () => {
  const { t, isItemActive } = useSideBar();

  const RenderItem: React.FC<{ item: MenuItem }> = ({ item }) => {
    const isRead = isItemActive(item);

    // Render clickable link if `to` exists
    if (item.to) {
      return (
        <Link
          href={item.to}
          className={`${style.items} ${isRead ? style.item_active : ""}`}
        >
          <span>{t(item.label)}</span>
          <Ripple />
        </Link>
      );
    }

    // Render as non-clickable header if no `to`
    return (
      <div className={style.groupHeader}>
        <span>{t(item.label)}</span>
        <Ripple />
      </div>
    );
  };

  return (
    <div className={style.main_sidenav}>
      <div className={style.logo}>LOGO</div>
      <nav className={style.nav_container}>
        {sideMenu.map((group, inx) => (
          <ul className={style.list} key={`${group.label}${inx}`}>
            {/* Render group header if isGroupHead */}
            {group.isGroupHead && (
              <li>
                <div className={style.groupHeader}>
                  <span>{t(group.label)}</span>
                  <Ripple />
                </div>
              </li>
            )}

            {/* Render children if present, else render group itself */}
            {(group.children ?? [group]).map((item, childIdx) => (
              <li key={`${item.label}${childIdx}`}>
                <RenderItem item={item} />
              </li>
            ))}
          </ul>
        ))}
        {logoutMenu.map((item, idx) => (
          <ul className={`${style.list} mt-auto pb-10`} key={`logout${idx}`}>
            <li>
              <div
                className={`${style.items} cursor-pointer text-red-600 hover:bg-red-50`}
                onClick={item.onClick}
              >
                {item.label}
                <Ripple />
              </div>
            </li>
          </ul>
        ))}
      </nav>
    </div>
  );
};

export default SideBar;
