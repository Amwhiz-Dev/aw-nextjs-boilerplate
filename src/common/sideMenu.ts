export const sideMenu = [
  {
    label: "dashboard",
    isGroupHead: false,
    children: [
      { label: "Dashboard", to: "/dashboard", active: ["/dashboard"] },
    ],
  },
  {
    label: "users",
    isGroupHead: false,
    children: [{ label: "Users", to: "/users", active: ["/users"] }],
  },
  {
    label: "system",
    isGroupHead: true,
    children: [
      { label: "portal", to: "/portal", active: ["/portal"] },
      { label: "language", to: "/language", active: ["/language"] },
      { label: "theming", to: "/theming", active: ["/theming"] },
      { label: "profile", to: "/profile", active: ["/profile"] },
    ],
  },
  {
    label: "component",
    isGroupHead: true,
    children: [
      { label: "Component", to: "/component", active: ["/component"] },
    ],
  },
  {
    label: "station",
    isGroupHead: false,
    to: "/station",
    active: ["/station"],
    children: [],
  },
];

// Define separate logoutMenu
export const logoutMenu = [
  {
    label: "Logout",
    isGroupHead: false,
    children: [{ label: "Logout", to: "/login", active: ["/login"] }],
    onClick: () => {
      // call your logout handler
      // handleLogout();
    },
  },
];
