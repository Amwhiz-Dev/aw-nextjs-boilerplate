export interface AuthOptionProps {
  formValue: Record<string, any>;
  setFormValue: React.Dispatch<React.SetStateAction<Record<string, any>>>;
  setSendOtp?: React.Dispatch<React.SetStateAction<boolean>>;
}
