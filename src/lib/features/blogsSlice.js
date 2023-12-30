import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: nanoid(), // daron khude redux toolkit nanoId vojod dare
    // date: new Date().toISOString(), // baid ISO bashe chon
    title: "اولین پست 🎈",
    content: "محتوای اولین پشت",
  },
  {
    id: nanoid(),
    // date: new Date(),
    title: "دومین پست 🩳",
    content: "محتوای دومین پشت",
  },
];

export const blogsSlice = createSlice({
  name: "blogs", // state.blogs khahad shod
  initialState: initialState,

  reducers: {
    //-------- hatman darone {} bashe hata agr yek khat bashe chon dare az Immer estefade mikone-----------

    // blogAdded: (state,payload) => { // action creator || slicereducer ya reducer
    //   state.push(payload)
    // },

    blogAdded: {
      reducer(state, action) {
        console.log(action);
        state.push(action.payload);
      },

      // ----- darone prepare miyam payload ro mohasebe va return mikonam va be sorat otomatic be onvan payload be reducer bala dade mishe ----
      prepare(title, content) {
        // ----- ma nmitonim darone khude reducer biam meghdar tasadofi bdim pas ghabl az dadn be reducer inja karo jam mikoinm -----
        return {
          payload: {
            id: nanoid(),
            title,
            content,
          },
        };
      },
    },
  },
});

// ----- khude createSlice action ro braye ma misaze inja mishe {type :"blogs/increment"} -----
export const { blogAdded } = blogsSlice.actions;

//----- reducer blogSlice ro export kardam chon store tavasot reducer sakhte mishe-----
export default blogsSlice.reducer;
