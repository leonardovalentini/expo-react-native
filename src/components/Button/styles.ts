import { StyleSheet } from "react-native";

const stylesFn = ({ disabled = false }) => {
  let backgroundColor;
  let color;

  if (disabled) {
    backgroundColor = "grey";
    color = "black";
  } else {
    backgroundColor = "#007AFF";
    color = "#fff";
  }

  return StyleSheet.create({
    button: {
      backgroundColor: backgroundColor,
      paddingVertical: 14,
      borderRadius: 8,
      alignItems: "center",
      marginTop: 10,
    },
    buttonText: {
      color: color,
      fontSize: 16,
      fontWeight: "bold",
    },
  });
};

export default stylesFn;
