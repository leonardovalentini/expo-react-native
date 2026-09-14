import { createNavigationContainerRef } from "@react-navigation/native";

import { RootTabParamList } from "./navigation";

export const navigationRef = createNavigationContainerRef<RootTabParamList>();

export function navigate<RouteName extends keyof RootTabParamList>(
  name: RouteName,
  params?: RootTabParamList[RouteName],
): void {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name as any, params as any);
  }
}
