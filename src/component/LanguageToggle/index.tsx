import { useLanguageContext } from "@codeBase/src/state-management/Language";
import { SplitButton } from "primereact/splitbutton";

const LanguageSwitcher = () => {
  const { setLanguage } = useLanguageContext();

  const items = [
    {
      label: "English",
      command: () => {
        setLanguage("en");
      },
    },
    {
      label: "Français",
      command: () => {
        setLanguage("fr");
      },
    },
    {
      label: "Arabic",
      command: () => {
        setLanguage("ar");
      },
    },
  ];
  return (
    <SplitButton
      className="action-menu lang"
      severity="secondary"
      text
      model={items}
      menuClassName="action-menu-drop"
      dropdownIcon="pi pi-language"
    />
  );
};

export default LanguageSwitcher;
