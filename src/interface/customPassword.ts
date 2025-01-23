export interface CustomPasswordInputProps {
  name: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className: string;
  required: boolean;
  label: string;
  readonly?: boolean;
  disable?: boolean;
  error?: boolean;
  placeHolder?: string;
  isShowfeedback?:boolean;
  genaratePassword?:boolean;
  toggleMask?:boolean;
  editPassword?:boolean;
}
