import { StyleSheet } from "react-native";

const stylesFn = ({ readOnly = false }) => {
  if (readOnly) {
    return StyleSheet.create({
      input: {
        color: "#aaa",
      },
    });
  } else {
    return StyleSheet.create({
      input: {},
    });
  }
};

export default stylesFn;
