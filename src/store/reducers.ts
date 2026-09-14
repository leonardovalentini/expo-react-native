import { combineReducers } from "redux";
import { select } from "redux-saga/effects";

import customers from "../features/customers/reducers";
import regions from "../features/regions/reducers";
import status from "../features/status/reducers";

const rootReducer = combineReducers({
  customers,
  regions,
  status,
});

export type RootState = ReturnType<typeof rootReducer>;
export const appSelect = select<(state: RootState) => any>;

export default rootReducer;
