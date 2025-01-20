import React from "react";
import style from "@codeBase/src/component/SideNavModule/sideNav.module.scss";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import { sideMenu } from "@codeBase/src/common/sideMenu";
import DashboardIcon from "../icon/Dashboard";
import OrderIcon from "../icon/Order";
import InventoryIcon from "../icon/Inventory";

const RenderSideBar: React.FC = () => {
  const router = useRouter();
  const path = usePathname();

  const routingSections = (menu: { to: string }) => {
    const pathData = "/portal" + menu.to;
      router.push(pathData);
  };

  const renderChildrenNav = (children: any, index: number) => {
    return (
      <div
        key={`${children.to}-${index}`}
        className="list-none"
        onClick={() => routingSections(children)}
      >
        <div
          className={`default-menu ${
            children?.activeRoute?.find((data: string) => path?.includes(data))
              ? "active-menu"
              : ""
          }`}
        >
          <div className="menu-list">
            {children.label && (
              <div className="menu_icons">{renderIcon(children.alias)}</div>
            )}
            <div>{children.label}</div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {" "}
      {sideMenu.map((value, index) => {
        return (
          <div key={value.alias}>
            {value?.isGroupHeader && value.children?.length > 0 && (
              <div
                key={`group-${value.to}-${index}`}
                className="group-name list-none"
              >
                <div className="group-label">{value.label}</div>
              </div>
            )}
            {!value.isGroupHeader && renderChildrenNav(value, index)}
            {value.children?.length ?
              value.children?.map((child: any, childIndex: number) => (
                <div key={`${child.to}-${childIndex}`}>
                  {renderChildrenNav(child, childIndex)}
                </div>
              )):<></>}
          </div>
        );
      })}
    </>
  );
};

const SideNavModule: React.FC = () => {
  return (
      <div className={`${style.card} ${style.expand}`}>
        <RenderSideBar />
      </div>
  );
};
export default SideNavModule;

export const renderIcon = (title: string) => {
  switch (title) {
    case "dashboard":
      return <DashboardIcon />;
    case "orders":
      return <OrderIcon />;
    case "inventory":
      return <InventoryIcon />;
    default:
      return null;
  }
};
