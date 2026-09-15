import { ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import WelcomeFeature from "../features/Welcome";

export default function Welcome() {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      contentContainerStyle={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        flexGrow: 1,
      }}
    >
      <WelcomeFeature />
    </ScrollView>
  );
}
