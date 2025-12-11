"use client";

import { Button } from "@/ui/button";

// Context
import { useModal } from "@template/context/ModalProvider";

export interface ModalTriggerProps {
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
      title={label}
      variant={"default"}
      onClick={() =>
        openModal({
          title,
          description,
          onOk,
          onCancel,
        })
      }
    >
      {label}
    </Button>
  );
};
