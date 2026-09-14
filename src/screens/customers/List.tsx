import { ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import CustomersList from "../../features/customers/List";
import { useAppCustomersRoute } from "../../navigation";

const List = () => {
  const insets = useSafeAreaInsets();

  const route = useAppCustomersRoute<"Customers">();

  const { region, status } = route.params || { region: "", status: "" };

  return (
    <ScrollView
      contentContainerStyle={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingHorizontal: 16,
      }}
    >
      <CustomersList region={region} status={status} />
    </ScrollView>
  );
};

export default List;
