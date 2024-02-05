import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheResult: (state, action) => {
      return (state = { ...state, ...action.payload });
    },
  },
});

export const { cacheResult } = searchSlice.actions;
export default searchSlice.reducer;

//   return (state = { ...state, ...action.payload });
// state = Object.assign(state, action.payload);
