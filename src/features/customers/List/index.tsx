import { View, Text, FlatList, Button } from "react-native";

import { useListCustomers } from "../hooks";
import { useAppNavigation } from "../../../navigation";

import Row from "./row";

const List = ({ region, status }: { region?: string; status?: string }) => {
  const { navigate } = useAppNavigation();
  const customers = useListCustomers({ region, status });

  return (
    <View>
      {customers && customers.length > 0 ? (
        <FlatList
          data={customers || []}
          renderItem={(props) => <Row {...props} />}
          keyExtractor={(item) => `${item.id}`}
        />
      ) : (
        <Text>{"No Customers"}</Text>
      )}
      <Button
        title={"Add Customer"}
        onPress={() => {
          navigate("CustomersTab", {
            screen: "NewCustomer",
            params: { region, status },
          });
        }}
      />
    </View>
  );
};

export default List;
