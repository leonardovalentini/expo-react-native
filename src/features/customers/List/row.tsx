import { View, Text, TouchableOpacity } from "react-native";

import { Customer } from "../model";
import { useAppNavigation } from "../../../navigation";

const Row = ({ item }: { item: Customer }) => {
  const { navigate } = useAppNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigate("CustomersTab", {
          screen: "DetailsCustomer",
          params: { id: item.id },
        })
      }
    >
      <View key={item.id} style={{ borderWidth: 1, padding: 10, margin: 10 }}>
        <Text key={"id"}>Id: {item.id}</Text>
        <Text key={"full_name"}>Full Name: {item.full_name}</Text>
        <Text key={"company"}>Company: {item.company}</Text>
        <Text key={"region"}>Region: {item.region}</Text>
        <Text key={"status"}>Status: {item.status}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Row;
