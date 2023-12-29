import { configureStore } from "@reduxjs/toolkit";
import blogsReducer from "./features/blogsSlice";

export const store = configureStore({
  reducer: {
    blogs: blogsReducer, // blogs mishe namei ke to redux devtool bra in slice namayesh mide
  },
});
