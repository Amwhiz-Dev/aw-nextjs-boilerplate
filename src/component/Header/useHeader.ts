import { useRef } from "react";
import { useNavigation } from "@template/hooks/useNavigation";
import { UserState } from "@/interface/store.interface";
import { useUserStore } from "@/store/useUserStore";
import { useRouter } from "next/router";
import React from "react";

export const useHeader = () => {
  const overlayRef = useRef<any>(null);
  const { navigate } = useNavigation();
  const { userData, updation } = useUserStore() as UserState;
  const router = useRouter();

  // const handleLogout = () => {
  //   // Clear Zustand user
  //   updation({});

  //   // Clear storage
  //   localStorage.removeItem("auth_token");
  //   localStorage.removeItem("auth_user");

  //   // Important: navigate directly using router.replace
  //   router.replace("/login");
  // };

  const toggleOverlay = (event: React.MouseEvent) => {
    overlayRef.current?.toggle(event);
  };

  const getUserInitial = () => {
    return userData?.email?.substring(0, 1) ?? "";
  };

  return {
    overlayRef,
    // handleLogout,
    toggleOverlay,
    getUserInitial,
    userData,
  };
};
