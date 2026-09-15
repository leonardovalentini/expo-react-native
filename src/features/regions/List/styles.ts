import { StyleSheet } from "react-native";

const stylesFn = () => {
  return StyleSheet.create({
    container: {
      padding: 20,
      backgroundColor: "#fff",
      flexGrow: 1,
    },
    emptyText: { flexGrow: 1 },
  });
};

export default stylesFn;
