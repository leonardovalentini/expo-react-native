import { View, Text, TouchableOpacity } from "react-native";

import { Region } from "../model";
import { useAppNavigation } from "../../../navigation";
import Button from "../../../components/Button";

const Row = ({ item }: { item: Region }) => {
  const { navigate } = useAppNavigation();

  return (
    <Button
      text={item.name}
      onPress={() =>
        navigate("CustomersTab", {
          screen: "Customers",
          params: { region: item.name },
        })
      }
    />
  );
};

export default Row;
