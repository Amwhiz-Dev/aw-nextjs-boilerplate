import { create } from "zustand";

interface UserState {
  userData: Record<string, any>;
  updation: (data: Record<string, any>) => void;
}

export const useUserStore = create<UserState>((set) => ({
  userData: {},
  updation: (data) =>
    set((state) => ({
      userData: {
        ...state.userData,
        ...data,
      },
    })),
}));
