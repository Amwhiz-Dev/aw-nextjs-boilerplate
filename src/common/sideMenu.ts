export const sideMenu = [
  {
    label: "Dashboard",
    isGroupHead: true,
    children: [{ label: "Reports", to: "/dashboard", active: ["/dashboard"] }],
  },
  {
    label: "System",
    isGroupHead: true,
    children: [
      { label: "Portal ( Protected )", to: "/portal", active: ["/portal"] },
      { label: "Language", to: "/language", active: ["/language"] },
      { label: "Theming", to: "/theming", active: ["/theming"] },
      { label: "Profile", to: "/profile", active: ["/profile"] },
    ],
  },
  {
    label: "Station",
    isGroupHead: false,
    to: "/station",
    active: ["/station"],
    children: [],
  },
];
