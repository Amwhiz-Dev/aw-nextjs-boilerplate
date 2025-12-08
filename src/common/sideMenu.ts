export const sideMenu = [
  {
    label: "dashboard",
    isGroupHead: true,
    children: [{ label: "reports", to: "/dashboard", active: ["/dashboard"] }],
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
