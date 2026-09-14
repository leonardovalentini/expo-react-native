import { useAppDispatch, useAppSelector } from "../../store";

export const useListRegions = () => {
  const dispatch = useAppDispatch();

  return useAppSelector((state) => state.regions.list.items);
};

export const useListStatus = () => {
  const dispatch = useAppDispatch();

  return useAppSelector((state) => state.status.list.items);
};
