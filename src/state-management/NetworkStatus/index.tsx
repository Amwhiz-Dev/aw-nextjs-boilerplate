import { toastMessage } from "@codeBase/src/common/toastMessage";
import { Position } from "@codeBase/src/enum/toastMessage.enum";
import { getAlertWarn } from "@codeBase/src/utils/globalHelper";
import { useRouter } from "next/router";
import { Toast } from "primereact/toast";
import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

const NetworkStatus = createContext<{ isOnline: boolean }>({ isOnline: true });

export function NetworkStatusProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [isOnline, setIsOnline] = useState(true);
  const toast = useRef<Toast>(null);

  useEffect(() => {
    const updateOnlineStatus = () => setIsOnline(navigator.onLine);

    window.addEventListener("online", updateOnlineStatus);
    window.addEventListener("offline", updateOnlineStatus);

    setIsOnline(navigator.onLine);
    return () => {
      window.removeEventListener("online", updateOnlineStatus);
      window.removeEventListener("offline", updateOnlineStatus);
    };
  },[setIsOnline]);
  
  useEffect(() => {
    if (!isOnline) {
      toast.current?.show(getAlertWarn(toastMessage.offline, true));
    } else {
      toast.current?.clear();
    }
    const handleRouteChange = () => {
      if (!isOnline) {
        router.events.emit("routeChangeError");
        throw "Abort route change.";
      }
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [isOnline, router]);

  return (
    <NetworkStatus.Provider value={{ isOnline }}>
      <Toast ref={toast} position={Position.BOTTOM_CENTER} />
      {children}
    </NetworkStatus.Provider>
  );
}

export function useNetworkStatus() {
  return useContext(NetworkStatus);
}
