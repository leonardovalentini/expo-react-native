import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";

import Button from "../../components/Button";
import Title from "../../components/Title";
import { useClearCustomerList } from "../customers/hooks";

import stylesFn from "./styles";

export default function Welcome() {
  const styles = stylesFn();
  const { navigate } = useNavigation();
  const clearCustomerList = useClearCustomerList();

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
      />

      <Button
        onPress={() =>
          navigate("CustomersTab", {
            screen: "Customers",
            params: {},
          })
        }
        text="Customers"
      />

      <Button
        onPress={() => {
          clearCustomerList();
        }}
        text="Empty customers list"
      />
    </View>
  );
}
