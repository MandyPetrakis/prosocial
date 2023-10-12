import { create } from "zustand";

export const useCurrentUser = create((set) => {
  return {
    user: {},
    contacts: [],
    setContacts: (contacts) => set({ contacts: contacts }),
    setUser: (user) => set({ user: user }),
  };
});
