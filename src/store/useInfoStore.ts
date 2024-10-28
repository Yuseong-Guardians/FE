import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type InfoState = {
  selectedBank: string;
  selectedLocation: string;
  selectedBankCategory: string;
  bohoonNumber: string;
  juminNumber: string;
  basicAddress: string;
  detailedAddress: string;
  accountHolder: string;
  accountNumber: string;
  reason: string;
  entryDate: string;
  remarks: string;
  setField: (field: keyof InfoState, value: string) => void;
  resetForm: () => void;
}

export const useInfoStore = create<InfoState>(
  devtools((set) => ({
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
    resetForm: () => set({
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
    }),
  }))
);
