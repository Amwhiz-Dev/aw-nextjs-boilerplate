export interface CustomInputProps {
  name: string;
  type: string;
  id: string;
  value: string;
  onChange: (e: any) => void;
  className: string;
  required: boolean;
  label: string;
  readonly?: boolean;
  disable?: boolean;
  error?: boolean;
  placeHolder?: string;
}
