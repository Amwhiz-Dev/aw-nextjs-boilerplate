import { InputSwitch } from "primereact/inputswitch";

//  Props
export interface CustomSwitchProps {
  id?: string;
  name?: string;
  label?: string;
  value: boolean;
  disabled?: boolean;
  className?: string;
  labelClass?: string;

  /** Triggered when toggled */
  onChange: (value: boolean) => void;
}

//  Component
export default function CustomSwitch({
  id,
  name,
  label,
  value,
  disabled,
  className,
  labelClass,
  onChange,
}: CustomSwitchProps) {
  return (
    <div className={`flex items-center gap-3 ${className || ""}`}>
      {label && (
        <label htmlFor={id} className={`text-sm ${labelClass || ""}`}>
          {label}
        </label>
      )}

      <InputSwitch
        id={id}
        checked={value}
        disabled={disabled}
        onChange={(e) => onChange(e.value as boolean)}
        name={name}
      />
    </div>
  );
}
