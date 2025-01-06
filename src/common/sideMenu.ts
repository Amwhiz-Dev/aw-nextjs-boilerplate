export const sideMenu = [
  {
    label: "Dashboard",
    alias: "dashboard",
    to: "/",
    activeRoute: ["add-dashboard", "dashboard", "edit-dashboard"],
    children: [],
  },

  {
    label: "store",
    isGroupHeader: true,
    hasLink: false,
    children: [
      {
        label: "Orders",
        alias: "orders",
        to: "/orders",
        activeRoute: ["add-orders", "orders", "edit-orders"],
        children: [],
        group: "store",
      },
      {
        label: "Inventory",
        alias: "inventory",
        to: "/inventory",
        activeRoute: ["add-inventory", "inventory", "edit-inventory"],
        children: [],
        group: "store",
      },
    ],
  },
];
