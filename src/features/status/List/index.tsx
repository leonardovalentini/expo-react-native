import { View, Text, FlatList, Button } from "react-native";

import { useListStatus } from "../hooks";
import Title from "../../../components/Title";

import Row from "./row";

const List = () => {
  const status = useListStatus();

  return (
    <View>
      <Title text="Status" />
      {status && status.length > 0 ? (
        <FlatList
          data={status || []}
          renderItem={(props) => <Row {...props} />}
          keyExtractor={(item) => item.name}
        />
      ) : (
        <>
          <Text>{"No Status"}</Text>
        </>
      )}
    </View>
  );
};

export default List;
