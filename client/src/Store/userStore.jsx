import { create } from "zustand";

const useUser = create((set) => {
  return {
    user: {}
    isUserValid: false,
    setIsUserValid: (validity) => set({ isUserValid: validity }),
  };
});

export default useUser;
