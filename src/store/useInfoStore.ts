import { create, StateCreator } from "zustand";
import { devtools } from "zustand/middleware"; // Devtools 불러오기

type InfoState = {
  selectedBank: string | number;
  selectedLocation: string;
  selectedBankCategory: string;
  bohoonNumber: string;
  juminNumber: string | number;
  basicAddress: string;
  detailedAddress: string;
  accountHolder: string;
  accountNumber: string | number;
  reason: string;
  entryDate: string | number;
  remarks: string;
  setField: (field: keyof InfoState, value: string | number) => void;
  addNewInfo: () => void;
}

const createInfoStore: StateCreator<InfoState> = (set) => ({
  selectedBank: "",
  selectedLocation: "",
  selectedBankCategory: "",
  bohoonNumber: "",
  juminNumber: "",
  basicAddress: "",
  detailedAddress: "",
  accountHolder: "",
  accountNumber: "",
  reason: "",
  entryDate: "",
  remarks: "",

  setField: (field, value) => set((state) => ({ ...state, [field]: value })),

  addNewInfo: () =>
    set((state) => ({
      selectedBank: "",
      selectedLocation: "",
      selectedBankCategory: "",
      bohoonNumber: "",
      juminNumber: "",
      basicAddress: "",
      detailedAddress: "",
      accountHolder: "",
      accountNumber: "",
      reason: "",
      entryDate: "",
      remarks: "",
    })),
});

export const useInfoStore = create<InfoState>()(devtools(createInfoStore));