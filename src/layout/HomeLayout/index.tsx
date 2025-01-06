import Header from "@codeBase/component/Header";
import React, { ReactNode, useMemo, useState } from "react";
import style from "@codeBase/layout/homeLayout/layout.module.scss";
import SideNavModule from "@codeBase/component/SideNavModule";
import { usePathname } from "next/navigation";

const HomeLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [expand, setExpand] = useState(true);
  const pathname = usePathname();
  const isPortalPath = useMemo(() => pathname?.includes("/portal"), [pathname]);

  const mainCardClass = `${style.card} ${
    isPortalPath ? (expand ? style.expand : style.colapse) : style.width_full
  }`;

  return (
    <div>
      <Header />
      <main className={style.main_layout}>
        {isPortalPath && <SideNavModule />}
        <div className={mainCardClass}>
          {/* {isPortalPath && (
            <div
              className={style.btn}
              onClick={() => setExpand((prev) => !prev)}
            />
          )} */}
          <div>{children}</div>
        </div>
      </main>
    </div>
  );
};

export default HomeLayout;
