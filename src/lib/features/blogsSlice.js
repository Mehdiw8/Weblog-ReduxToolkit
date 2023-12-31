import { createSlice, nanoid } from "@reduxjs/toolkit";



// این یک استاندارد هست که ما نباید استیت ریداکسی مون رو مساوی یک آرایه قرار بدیم و شروع کنیم به قرار دادن موارد جدید درون اون در صورتی که استیت ما باید ابجکت باشد.
const initialState = {
  blogsArray: [
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
  ],
};

export const blogsSlice = createSlice({
  name: "blogs", // state.blogs khahad shod
  initialState: initialState,

  reducers: {
    //-------- hatman darone {} bashe hata agr yek khat bashe chon dare az Immer estefade mikone-----------

    // blogAdded: (state,action) => { // action creator || slicereducer ya reducer
    //   state.push(payload)
    // },
    //-------------------------------------------------------- blogAdded ---------------------------------------------------
    blogAdded: {
      reducer(state, action) {
        state.blogsArray.push(action.payload);
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

    //-------------------------------------------------------- blogUpdated ---------------------------------------------------

    blogUpdated(state, action) {
      const { id, title, content } = action.payload;
      const targetBlog = state.blogsArray.find((blog) => blog.id === id);
      if (targetBlog) {
        targetBlog.title = title;
        targetBlog.content = content;
      }
    },

    //-------------------------------------------------------- blogDeleted ---------------------------------------------------
    blogDeleted(state, action) {
      const { id } = action.payload;
      state.blogsArray = state.blogsArray.filter((blog) => blog.id !== id); //yek array bar migardone mizare to statemon
    },
  },
});

// ----- khude createSlice action ro braye ma misaze inja mishe {type :"blogs/increment"} -----
export const { blogAdded, blogUpdated, blogDeleted } = blogsSlice.actions;

//----- reducer blogSlice ro export kardam chon store tavasot reducer sakhte mishe-----
export default blogsSlice.reducer;

// selectors
export const selectAllBlogs = (state) => state.blogs.blogsArray;
export const selectBlogById = (state, blogId) =>
  state.blogs.blogsArray.find((blog) => blog.id === blogId);
