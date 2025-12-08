import { ToggleButton } from "primereact/togglebutton";

const CustomToggle = ({ label, checked, onChange }: any) => {
  return (
    <div className="flex flex-column gap-2">
      <label>{label}</label>
      <ToggleButton
        checked={checked}
        onChange={(e) => onChange(e.value)}
        onLabel="Yes"
        offLabel="No"
      />
    </div>
  );
};

export default CustomToggle;
