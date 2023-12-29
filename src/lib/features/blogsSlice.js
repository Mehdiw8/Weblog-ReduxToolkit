import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: nanoid(), // daron khude redux toolkit in abzar vojod dare
    date: new Date().toISOString(), // baid ISO bashe chon
    title: "اولین پست 🎈",
    content: "محتوای اولین پشت",
  },
  {
    id: nanoid(),
    date: new Date(),
    title: "دومین پست 🧨ّ",
    content: "محتوای دومین پشت",
  },
];

export const blogsSlice = createSlice({
  name: "blogs", // state.blogs khahad shod
  initialState: initialState,

  reducers: {
    // hatman darone {} bashe hata agr yek khat bashe chon dare az Immer estefade mikone
    increment: () => {}, // action creator || slicereducer ya reducer
  },
});

// khude createSlice action ro braye ma misaze inja mishe {type :"blogs/increment"}
export const { increment } = blogsSlice.actions;

// reducer blogSlice ro export kardam chon store tavasot reducer sakhte mishe
export default blogsSlice.reducer;
