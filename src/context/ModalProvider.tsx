"use client";

import { ReactNode, createContext, useContext, useState } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";

interface ModalConfig {
  title?: string;
  description?: string;
  onOk?: () => void;
  onCancel?: () => void;
}

const ModalContext = createContext<any>(null);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [visible, setVisible] = useState(false);
  const [config, setConfig] = useState<ModalConfig>({});

  const openModal = (payload: ModalConfig) => {
    setConfig(payload);
    setVisible(true);
  };

  const closeModal = () => setVisible(false);

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}

      <Dialog
        header={config.title}
        visible={visible}
        onHide={closeModal}
        style={{ width: "28rem" }}
      >
        {config.description && (
          <p className="text-sm opacity-80">{config.description}</p>
        )}

        {/* Footer */}
        <div className="flex justify-end gap-2 mt-5">
          <Button
            label="Cancel"
            severity="secondary"
            onClick={() => {
              config.onCancel?.();
              closeModal();
            }}
          />
          <Button
            label="OK"
            onClick={() => {
              config.onOk?.();
              closeModal();
            }}
          />
        </div>
      </Dialog>
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
