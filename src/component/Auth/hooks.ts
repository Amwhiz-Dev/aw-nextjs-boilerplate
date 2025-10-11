import { SERVICE_KEY } from "@template/enum/service.enum";
import { useNavigation } from "@template/hooks/useNavigation";
import templateService from "@template/services/template.service";
import { getAlertError } from "@template/utils/generateToast";
import { parseArray } from "@template/utils/parseArray";
import { emailRegex } from "@template/utils/pattern/email.regex";
import type { ToastMessage } from "primereact/toast";
import { useState } from "react";
import useSWRMutation from "swr/mutation";



export const useLogin = (
  toastShow: (message: ToastMessage) => void,
  updation: (data: Record<string, any>) => void
) => {
  const [formData, setFormData] = useState<Record<string,any>>({});
  const { navigate } = useNavigation();
  const {
    trigger,
    isMutating,
    data,
    error: swrError,
  } = useSWRMutation(SERVICE_KEY.LOGIN, () =>
    templateService.verifyUser(formData)
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = (): boolean => {
    let valid = true;
    const error = [];
    if (!emailRegex.test(formData?.email ?? "")) {
      error.push("Please enter a valid email address");
      valid = false;
    }
    if (!formData?.password) {
      error.push("Password cannot be empty");
      valid = false;
    }
    if (!valid) toastShow(getAlertError(parseArray(error)));
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      await trigger();
    } catch (err: any) {
      toastShow(getAlertError(err?.response?.data?.message));
    } finally {
      updation(formData);
      navigate("/dashboard");
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    isMutating,
    data,
    swrError,
  };
};
