import { Checkbox } from "primereact/checkbox";

const CustomCheckbox = ({ label, checked, onChange }: any) => {
  return (
    <div className="flex align-items-center gap-2">
      <Checkbox checked={checked} onChange={(e) => onChange(e.checked)} />
      <label>{label}</label>
    </div>
  );
};

export default CustomCheckbox;
