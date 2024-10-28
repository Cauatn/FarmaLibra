import { create } from "zustand";

interface ActionState {
  action: string;
  category: string;
  setAction: (newAction: string) => void;
  setCategory: (newCategory: string) => void;
}

export const useActionStore = create<ActionState>((set) => ({
  category: "",
  action: "",
  setAction: (newAction) => set({ action: newAction }),
  setCategory: (newCategory) => set({ category: newCategory }),
}));

export interface Item {
  action: string;
  message: string;
  videoId: string;
}

interface StringArrayState {
  items: Item[];
  addItem: (item: Item) => void;
  removeItem: (videoId: string) => void;
}

export const useListVideos = create<StringArrayState>((set) => ({
  items: [],
  addItem: (item) => set((state) => ({ items: [...state.items, item] })),
  removeItem: (videoId: string) =>
    set((state) => ({
      items: state.items.filter((item) => item.videoId !== videoId),
    })),
}));

interface DialogState {
  isOpen: boolean;
  openDialog: () => void;
  closeDialog: () => void;
}

export const useDialogState = create<DialogState>((set) => ({
  isOpen: true,
  openDialog: () => set({ isOpen: true }),
  closeDialog: () => set({ isOpen: false }),
}));
