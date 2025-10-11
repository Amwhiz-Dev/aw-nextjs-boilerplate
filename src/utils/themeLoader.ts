export const changeTheme = (themeName: string) => {
  const themeLinkId = "app-theme";
  const existingLink = document.getElementById(themeLinkId) as HTMLLinkElement;

  const themePath = `https://unpkg.com/primereact/resources/themes/${themeName}/theme.css`;

  if (existingLink) {
    existingLink.href = themePath;
  } else {
    const link = document.createElement("link");
    link.id = themeLinkId;
    link.rel = "stylesheet";
    link.href = themePath;
    document.head.appendChild(link);
  }
};
