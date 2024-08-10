import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

const FlatListcallBackend = () => {
  // Define state for collect user's data and loading status
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  // Define useEffect for pulling API when component mount
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  // Function _renderItem for using in FlatList
  const _renderItem = ({ item }: { item: User }) => (
    <View style={styles.item}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.name}>{item.email}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {loading ? ( // Still loading and show ActivityIndicator
        <ActivityIndicator size="large" color="red" />
      ) : (
        // Finished loading and show FlatList
        <FlatList
          data={data}
          renderItem={_renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
};

export default FlatListcallBackend;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    paddingTop: 50,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  email: {
    fontSize: 16,
  },
});
