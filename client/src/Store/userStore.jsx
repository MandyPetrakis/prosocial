import { create } from "zustand";

export const useUser = create((set) => {
  return {
    user: {},
    setUser: (user) => set({ user: user }),
  };
});
