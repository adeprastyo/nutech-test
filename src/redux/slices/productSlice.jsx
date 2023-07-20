import { createSlice } from "@reduxjs/toolkit";

const productInitialState = {
  nama: "",
  deskripsi: "",
  hargaBeli: "",
  hargaJual: "",
  stok: "",
  urlGambar:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYgi08f21tpsK_D4wmGgKr1ix7SgkyxboZNHcvgFqnyD9rYGhirDZCSb5KTf1jo_H9Zd8&usqp=CAU",
};

const productsSlice = createSlice({
  name: "products",
  initialState: productInitialState,
  reducers: {
    addProduct: (state, action) => {
      state.products = action.payload;
    },
    updateProduct: (state, action) => {
      state.nama = action.payload.nama;
      state.deskripsi = action.payload.deskripsi;
      state.hargaBeli = action.payload.hargaBeli;
      state.hargaJual = action.payload.hargaJual;
      state.stok = action.payload.stok;
      state.urlGambar = action.payload.urlGambar;
    },
    deleteProduct: (state, action) => {
      const productId = action.payload.id;
      return state.filter((product) => product.id !== productId);
    },
  },
});

export const { addProduct, updateProduct, deleteProduct } =
  productsSlice.actions;

export default productsSlice.reducer;
