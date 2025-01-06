import { CheckboxChangeEvent } from "primereact/checkbox";

export interface CustomCheckboxProps {
  id: string;
  name: string;
  checked: boolean;
  onChange(event: CheckboxChangeEvent): void;
  label:string;
  className:string;
}
