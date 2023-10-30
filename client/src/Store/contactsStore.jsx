import { create } from "zustand";

export const useContacts = create((set) => {
  return {
    contacts: {},
    setContacts: (contacts) => set({ contacts: contacts }),
  };
});
