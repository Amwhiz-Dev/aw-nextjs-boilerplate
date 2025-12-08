import { RadioButton } from "primereact/radiobutton";

const CustomRadio = ({ label, value, onChange, options }: any) => {
  return (
    <div className="flex flex-column gap-2">
      <label>{label}</label>
      <div className="flex gap-4">
        {options?.map((opt: any) => (
          <div key={opt.value} className="flex items-center gap-2">
            <RadioButton
              inputId={opt.value}
              value={opt.value}
              checked={value === opt.value}
              onChange={(e) => onChange(e.value)}
            />
            <label htmlFor={opt.value}>{opt.label}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomRadio;
