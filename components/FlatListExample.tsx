import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

interface UserItem {
  id: string;
  name: string;
  email: string;
}

const FlatListExample = (): React.JSX.Element => {
  const user: UserItem[] = [
    { id: "1", name: "Alice", email: "alice@example.com" },
    { id: "2", name: "Bob", email: "bob@example.com" },
    { id: "3", name: "Cara", email: "cara@example.com" },
  ];

  // Function _renderItem
  const _renderItem = ({ item }: { item: UserItem }) => (
    <View style={styles.item}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.name}>{item.email}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={user} // Define data of FlatList
        renderItem={_renderItem} // Create _renderItem
        keyExtractor={(item) => item.id} // Defineprimary key of each items
      />
    </View>
  );
};

export default FlatListExample;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  email: {
    fontSize: 14,
  },
});
