import Header from "@codeBase/src/component/Header";
import React, { ReactNode, useMemo } from "react";
import style from "@codeBase/src/layout/Portal/layout.module.scss";
import SideNavModule from "@codeBase/src/component/SideNavModule";
import { usePathname } from "next/navigation";

const HomeLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const pathname = usePathname();
  const isPortalPath = useMemo(() => pathname?.includes("/portal"), [pathname]);

  const mainCardClass = `${style.card} ${
    isPortalPath ? style.expand : style.width_full
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
