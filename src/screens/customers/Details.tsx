import { ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import Form from "../../features/customers/Form";
import { useAppCustomersRoute } from "../../navigation";
import { useAppSelector } from "../../store";

const Details = () => {
  const insets = useSafeAreaInsets();

  const route = useAppCustomersRoute<"UpdateCustomer">();
  const { id } = route.params || { id: "" };
  const customers = useAppSelector((state) => state.customers.list.items);
  const customer = customers.filter((customer) => customer.id === id)[0];

  return (
    <ScrollView
      contentContainerStyle={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        flexGrow: 1,
      }}
    >
      <Form customer={customer} disabled />
    </ScrollView>
  );
};

export default Details;
