import { create } from "zustand";

const useUserStore = create((set) => ({
  user: localStorage.getItem("user") || null,
  setUser: (user: string) => {
    localStorage.setItem("user", user);
    set({ user });
  },
  getUser: () => {
    return localStorage.getItem("user");
  },
}));
