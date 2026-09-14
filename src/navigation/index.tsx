import { RouteProp, useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

import {
  CustomersStackParamList,
  RegionsStackParamList,
  RootTabParamList,
} from "./navigation";

export const useAppNavigation = useNavigation<
  BottomTabNavigationProp<RootTabParamList>
>;

export const useAppCustomersRoute = <
  Screen extends keyof CustomersStackParamList,
>() => {
  return useRoute<RouteProp<CustomersStackParamList, Screen>>();
};

export const useAppRegionsRoute = <
  Screen extends keyof RegionsStackParamList,
>() => {
  return useRoute<RouteProp<RegionsStackParamList, Screen>>();
};
