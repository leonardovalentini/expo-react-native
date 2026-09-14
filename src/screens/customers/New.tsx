import { ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import Form from "../../features/customers/Form";
import { useAppCustomersRoute } from "../../navigation";

const New = () => {
  const insets = useSafeAreaInsets();

  const route = useAppCustomersRoute<"NewCustomer">();

  const { region, status } = route.params || { region: "", status: "" };

  return (
    <ScrollView
      contentContainerStyle={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingHorizontal: 16,
      }}
    >
      <Form region={region} status={status} />
    </ScrollView>
  );
};

export default New;
