import { languages } from "@template/common/language";
import { useLanguageContext } from "@template/context/LanguageContext";
import { Dropdown } from "primereact/dropdown";
import { FloatLabel } from "primereact/floatlabel";

const LanguageSwither = () => {
  const { language, setLanguage } = useLanguageContext();

  return (
    <div className="themeswitcher-select">
      <FloatLabel>
        <Dropdown
          inputId="dd-city"
          value={language}
          onChange={(e) => setLanguage(e.value)}
          options={languages}
          optionLabel="name"
          optionValue="code"
        />
        <label htmlFor="dd-city">Language</label>
      </FloatLabel>
    </div>
  );
};

export default LanguageSwither;
