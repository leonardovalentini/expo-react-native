import { createSlice } from "@reduxjs/toolkit";
import { RegionState } from "./model";

const name = "regions";

const initialState: RegionState = {
  list: {
    items: [],
  },
};

const reducers = {};

const slice = createSlice({
  name,
  initialState,
  reducers,
});

export const {} = slice.actions;

export default slice.reducer;
