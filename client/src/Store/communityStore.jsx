import { create } from "zustand";

export const useCommunities = create((set) => {
  return {
    communities: {},
    setCommunities: (communities) => set({ communities: communities }),
  };
});
