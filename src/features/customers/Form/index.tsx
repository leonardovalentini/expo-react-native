import { useEffect } from "react";
import { Picker } from "@react-native-picker/picker";
import { View, Text } from "react-native";

import { useUpdateFields, useNewCustomer, useUpdateCustomer } from "../hooks";
import { useListRegions, useListStatus } from "../../regions/hooks";
import { Customer } from "../model";
import { useAppNavigation } from "../../../navigation";
import Button from "../../../components/Button";
import TextBox from "../../../components/TextBox";

import stylesFn from "./styles";

const Form = ({
  customer,
  disabled,
  region,
  status,
}: {
  customer?: Customer;
  disabled?: boolean;
  region?: string;
  status?: string;
}) => {
  const { navigate } = useAppNavigation();
  const { fields, setFormField, loadCustomer } = useUpdateFields();

  const { onSubmit: onSubmitNew } = useNewCustomer();
  const { onSubmit: onSubmitUpdate } = useUpdateCustomer();
  const regions = useListRegions();
  const statusOptions = useListStatus();

  const {
    full_name,
    email,
    phone,
    company,
    region: regionValue,
    status: statusValue,
  } = fields;
  const styles = stylesFn();

  const onSubmit = () => {
    if (disabled) {
      navigateUpdateCustomer();
      return;
    }

    if (!customer) {
      onSubmitNew();
    } else {
      onSubmitUpdate(customer.id);
    }
  };

  const navigateUpdateCustomer = () => {
    if (customer)
      navigate("CustomersTab", {
        screen: "UpdateCustomer",
        params: { id: customer.id },
      });
  };

  useEffect(() => {
    loadCustomer({ customer, region, status });
  }, [customer, region, status]);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Full Name</Text>
      <TextBox
        key={"full_name"}
        style={styles.input}
        placeholder="John Doe"
        value={full_name || ""}
        onChangeText={(v) => setFormField("full_name", v)}
        readOnly={disabled}
      />
      <Text style={styles.label}>Email Address</Text>
      <TextBox
        key={"email"}
        style={styles.input}
        placeholder="john@example.com"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email || ""}
        onChangeText={(v) => setFormField("email", v)}
        readOnly={disabled}
      />
      <Text style={styles.label}>Phone Number</Text>
      <TextBox
        key={"phone"}
        style={styles.input}
        placeholder="(555) 000-0000"
        keyboardType="phone-pad"
        value={phone || ""}
        onChangeText={(v) => setFormField("phone", v)}
        readOnly={disabled}
      />
      <Text style={styles.label}>Company Name</Text>
      <TextBox
        key={"company"}
        style={styles.input}
        placeholder="Acme Corp"
        value={company || ""}
        onChangeText={(v) => setFormField("company", v)}
        readOnly={disabled}
      />
      <Text style={styles.label}>Region</Text>
      <Picker
        selectedValue={regionValue || ""}
        onValueChange={(v) => setFormField("region", v || "")}
        style={styles.input}
        enabled={!disabled}
      >
        <Picker.Item label={""} value={null} />
        {regions.map((region) => (
          <Picker.Item
            key={region.name}
            label={region.name}
            value={region.name}
          />
        ))}
      </Picker>

      <Text style={styles.label}>Status</Text>
      <Picker
        selectedValue={statusValue || ""}
        onValueChange={(v) => setFormField("status", v || "")}
        style={styles.input}
        enabled={!disabled}
      >
        <Picker.Item label={""} value={null} />
        {statusOptions.map((statusOption) => (
          <Picker.Item
            key={statusOption.name}
            label={statusOption.name}
            value={statusOption.name}
          />
        ))}
      </Picker>
      <Button
        text={!disabled ? "Save Customer" : "Edit Customer"}
        onPress={onSubmit}
      />
    </View>
  );
};

export default Form;
