import { create } from "zustand";

export const useProductStore = create((set) => ({
    visibleProductModal: false,
    setVisibleProductModal:  (value) => set({visibleProductModal: value}),
    
    visibleDel: false,
    setVisibleDel:  (value) => set({visibleDel: value}),


    selectedProduct: null,
    setSelectedProduct:  (value) => set({selectedProduct: value}),
}))