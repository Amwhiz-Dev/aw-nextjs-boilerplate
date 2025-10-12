import { useRef } from "react";
import { useNavigation } from "@template/hooks/useNavigation";
import { useUserStore } from "@template/store/useCounterStore";

export const useHeader = () => {
  const overlayRef = useRef<any>(null);
  const { navigate } = useNavigation();
  const { userData } = useUserStore();

  const handleLogout = () => {
    navigate("/login");
  };

  const toggleOverlay = (event: React.MouseEvent) => {
    overlayRef.current?.toggle(event);
  };

  const getUserInitial = () => {
    return userData?.email?.substring(0, 1) ?? "";
  };

  return {
    overlayRef,
    handleLogout,
    toggleOverlay,
    getUserInitial,
    userData,
  };
};
