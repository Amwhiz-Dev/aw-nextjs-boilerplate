"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useRef,
} from "react";
import { Toast } from "primereact/toast";

interface NetworkContextProps {
  online: boolean;
}

const NetworkContext = createContext<NetworkContextProps | null>(null);

export const NetworkProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [online, setOnline] = useState(
    typeof navigator !== "undefined" ? navigator.onLine : true
  );

  const offlineToastRef = useRef<Toast | null>(null);

  // ✅ track offline toast status safely
  const shownRef = useRef(false);

  useEffect(() => {
    const updateOnline = () => setOnline(navigator.onLine);

    window.addEventListener("online", updateOnline);
    window.addEventListener("offline", updateOnline);

    return () => {
      window.removeEventListener("online", updateOnline);
      window.removeEventListener("offline", updateOnline);
    };
  }, []);

  useEffect(() => {
    if (!offlineToastRef.current) return;

    if (!online) {
      if (!shownRef.current) {
        shownRef.current = true; // mark as shown
        offlineToastRef.current.show({
          severity: "warn",
          summary: "Offline",
          detail: "You are offline. Some features may not work.",
          sticky: true,
        });
      }
    } else {
      offlineToastRef.current.clear();
      shownRef.current = false; // reset status
    }
  }, [online]);

  return (
    <NetworkContext.Provider value={{ online }}>
      <Toast ref={offlineToastRef} position="bottom-center" />
      {children}
    </NetworkContext.Provider>
  );
};

export const useNetwork = () => {
  const ctx = useContext(NetworkContext);
  if (!ctx) throw new Error("useNetwork must be inside NetworkProvider");
  return ctx;
};
