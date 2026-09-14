import { useEffect, useState } from "react";
import * as Font from "expo-font";
import { Provider } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet, View, ActivityIndicator } from "react-native";

import store from "./src/store";
import Routes from "./src/navigation/routes";
import { askNotification, getListener } from "./src/utilities/notifications";

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      try {
        // Explicitly load the raw font bundle so the browser injects the CSS @font-face
        await Font.loadAsync({
          Ionicons: require("@react-native-vector-icons/ionicons/fonts/Ionicons.ttf"),
        });
      } catch (e) {
        console.warn("Could not load icon fonts on web:", e);
      } finally {
        setFontsLoaded(true);
      }
    }

    loadFonts();
  }, []);

  useEffect(() => {
    askNotification();
    const listener = getListener();
    return () => listener.remove();
  }, []);

  const styles = StyleSheet.create({
    centered: { flex: 1, justifyContent: "center", alignItems: "center" },
  });

  if (!fontsLoaded) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <Routes />
      </Provider>
    </SafeAreaProvider>
  );
}
