import { themeSwitcherColor } from "@template/common/themeSwitcher";
import { useThemeContext } from "@template/context/ThemeContext";
import { Dropdown } from "primereact/dropdown";
import { FloatLabel } from "primereact/floatlabel";

const ThemeSwitcher = () => {
  const { setTheme, theme } = useThemeContext();

  const dropdownColor = (option: any) => {
    return (
      <div className="theme-color-placeholder">
        <div className={`theme-color ${option?.value}`}></div>
        <div>{option?.label}</div>
      </div>
    );
  };

  return (
    <div className="themeswitcher-select">
      <FloatLabel>
        <Dropdown
          inputId="dd-city"
          value={theme}
          onChange={(e) => setTheme(e.value)}
          options={themeSwitcherColor}
          optionLabel="label"
          optionValue="value"
          valueTemplate={dropdownColor}
          itemTemplate={dropdownColor}
        />
        <label htmlFor="dd-city">Themes</label>
      </FloatLabel>
    </div>
  );
};

export default ThemeSwitcher;
