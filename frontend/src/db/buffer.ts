import { create } from "zustand";

interface ActionState {
  action: string;
  setAction: (newAction: string) => void;
  setCategory: (newCategory: string) => void;
}

export const useActionStore = create<ActionState>((set) => ({
  category: "",
  action: "",
  setAction: (newAction) => set({ action: newAction }),
  setCategory: (newCategory) => set({ action: newCategory }),
}));

interface StringArrayState {
  items: string[];
  addItem: (item: string) => void;
  removeItem: (item: string) => void;
}

export const useListVideos = create<StringArrayState>((set) => ({
  items: [],
  addItem: (item) => set((state) => ({ items: [...state.items, item] })),
  removeItem: (item) =>
    set((state) => ({ items: state.items.filter((i) => i !== item) })),
}));
