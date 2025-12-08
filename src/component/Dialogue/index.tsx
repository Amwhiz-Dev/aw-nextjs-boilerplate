"use client";

// PrimeReact
import { Button } from "primereact/button";

// Context
import { useModal } from "@template/context/ModalProvider";

interface ModalTriggerProps {
  label: string;
  title?: string;
  description?: string;
  onOk?: () => void;
  onCancel?: () => void;
}

export const ModalTrigger = ({
  label,
  title = "Modal Title",
  description,
  onOk,
  onCancel,
}: ModalTriggerProps) => {
  const { openModal } = useModal();

  return (
    <Button
      label={label}
      onClick={() =>
        openModal({
          title,
          description,
          onOk,
          onCancel,
        })
      }
    />
  );
};
