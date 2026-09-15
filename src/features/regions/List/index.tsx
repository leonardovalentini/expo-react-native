import { View, Text, FlatList } from "react-native";

import { useListRegions } from "../hooks";
import Title from "../../../components/Title";

import Row from "./row";
import stylesFn from "./styles";

const List = () => {
  const regions = useListRegions();
  const styles = stylesFn();

  return (
    <View style={styles.container}>
      <Title text="Regions" />
      {regions && regions.length > 0 ? (
        <FlatList
          data={regions || []}
          renderItem={(props) => <Row {...props} />}
          keyExtractor={(item) => item.name}
        />
      ) : (
        <>
          <Text>{"No Regions"}</Text>
        </>
      )}
    </View>
  );
};

export default List;
