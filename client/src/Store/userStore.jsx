import { create } from "zustand";

export const useCurrentUser = create((set) => {
  return {
    user: {},
    setUser: (user) => set({ user: user }),
  };
});
