import { View, Text, TouchableOpacity } from "react-native";

import { Status } from "../model";
import { useAppNavigation } from "../../../navigation";
import Button from "../../../components/Button";

const Row = ({ item }: { item: Status }) => {
  const { navigate } = useAppNavigation();

  return (
    <Button
      text={item.name}
      onPress={() =>
        navigate("CustomersTab", {
          screen: "Customers",
          params: { status: item.name },
        })
      }
    />
  );
};

export default Row;
