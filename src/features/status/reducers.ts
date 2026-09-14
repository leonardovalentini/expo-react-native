import { createSlice } from "@reduxjs/toolkit";

import { StatusState } from "./model";

const name = "status";

const initialState: StatusState = {
  list: {
    items: [],
  },
};

const reducers = {
  loadStatus: (state: StatusState) => {},
};

const slice = createSlice({
  name,
  initialState,
  reducers,
});

export const { loadStatus } = slice.actions;

export default slice.reducer;
