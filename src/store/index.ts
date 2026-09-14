import createSagaMiddleware from "redux-saga";
import { useSelector, useDispatch } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import reducer, { RootState } from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer,
  preloadedState: {
    regions: {
      list: {
        items: [{ name: "NE" }, { name: "NO" }, { name: "SE" }, { name: "SO" }],
      },
    },
    status: {
      list: {
        items: [{ name: "Active" }, { name: "Inactive" }],
      },
    },
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
