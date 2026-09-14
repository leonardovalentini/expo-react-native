import { View, Text, TouchableOpacity } from "react-native";

import { Status } from "../model";
import { useAppNavigation } from "../../../navigation";

const Row = ({ item }: { item: Status }) => {
  const { navigate } = useAppNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigate("CustomersTab", {
          screen: "Customers",
          params: { status: item.name },
        })
      }
    >
      <View key={item.name} style={{ borderWidth: 1, padding: 10, margin: 10 }}>
        <Text key={"full_name"}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Row;
