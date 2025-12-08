import { Chips } from "primereact/chips";

const CustomChips = ({ label, value, onChange }: any) => {
  return (
    <div className="flex flex-column gap-2">
      <label>{label}</label>
      <Chips value={value} onChange={(e) => onChange(e.value)} />
    </div>
  );
};

export default CustomChips;
