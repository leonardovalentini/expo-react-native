import { TextInput, TextInputProps } from "react-native";

import stylesFn from "./styles";

const TextBox = ({ style, ...props }: TextInputProps) => {
  const styles = stylesFn({ readOnly: props.readOnly });

  return <TextInput style={[styles.input, style]} {...props} />;
};
export default TextBox;
