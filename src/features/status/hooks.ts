import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../store";

import * as actions from "./reducers";

export const useListStatus = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(actions.loadStatus());
  }, [dispatch]);

  return useAppSelector((state) => state.status.list.items);
};
