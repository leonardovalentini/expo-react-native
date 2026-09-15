import { StyleSheet } from "react-native";

const stylesFn = () => {
  return StyleSheet.create({
    container: {
      padding: 20,
      backgroundColor: "#fff",
      flexGrow: 1,
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 20,
      color: "#333",
    },
    label: {
      fontSize: 14,
      fontWeight: "600",
      marginBottom: 6,
      color: "#555",
    },
    input: {
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 8,
      paddingHorizontal: 12,
      paddingVertical: 10,
      fontSize: 16,
      marginBottom: 16,
      backgroundColor: "#f9f9f9",
    },
  });
};

export default stylesFn;
