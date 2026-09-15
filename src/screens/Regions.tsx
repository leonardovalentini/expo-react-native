import { ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import RegionsList from "../features/regions/List";

export default function Regions() {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      contentContainerStyle={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        flexGrow: 1,
      }}
    >
      <RegionsList />
    </ScrollView>
  );
}
