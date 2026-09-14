import { ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import StatusList from "../features/status/List";

export default function Status() {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      contentContainerStyle={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingHorizontal: 16,
      }}
    >
      <StatusList />
    </ScrollView>
  );
}
