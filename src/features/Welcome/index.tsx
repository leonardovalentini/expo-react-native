import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";

import Button from "../../components/Button";
import Title from "../../components/Title";

import stylesFn from "./styles";

export default function Welcome() {
  const styles = stylesFn();
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <Title text="Welcome to the customers app" />

      <Button
        onPress={() =>
          navigate("CustomersTab", {
            screen: "NewCustomer",
            params: {},
          })
        }
        text="Add a Customer"
        disabled={false}
      />

      <Button
        onPress={() =>
          navigate("CustomersTab", {
            screen: "Customers",
            params: {},
          })
        }
        text="Customers"
        disabled={false}
      />
    </View>
  );
}
