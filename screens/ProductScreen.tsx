import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  ListRenderItem,
  ActivityIndicator,
  FlatList,
} from "react-native";
import React, { useCallback, useLayoutEffect, useState } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import {
  HeaderButton,
  HeaderButtons,
  Item,
} from "react-navigation-header-buttons";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { findAllProduct } from "../services/product-service";
import { ListItem, Avatar } from "@rneui/themed";
import { Badge } from "@rneui/base";

const MaterialHeaderButton = (props: any) => (
  <HeaderButton IconComponent={MaterialIcon} iconSize={23} {...props} />
);

const ProductScreen = (): React.JSX.Element => {
  const navigation = useNavigation<any>();
  const [product, setProduct] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Product",
      headerTitleAlign: "center",
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
          <Item
            title="menu"
            iconName="menu"
            onPress={() => {
              navigation.openDrawer();
            }}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  const getProduct = async () => {
    try {
      setLoading(true);
      const res = await findAllProduct();
      console.log(res.data.data);
      setProduct(res.data.data);
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getProduct();
    }, [])
  );

  const _renderItem: ListRenderItem<any> = ({ item }) => {
    return (
      <>
        <ListItem bottomDivider onPress={() => navigation.navigate("Detail", {item})}>
          <Avatar rounded size={50} source={{ uri: item.picture }} />
          <ListItem.Content>
            <ListItem.Title>{item.title}</ListItem.Title>
            <ListItem.Subtitle>{item.detail}</ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron />
          <Badge value={item.view} status="success"></Badge>
        </ListItem>
      </>
    );
  };

  return (
    <View>
      {loading ? ( // Still loading and show ActivityIndicator
        <ActivityIndicator size="large" color="blue" />
      ) : (
        <FlatList
          data={product}
          renderItem={_renderItem}
          keyExtractor={(item: any) => item.id.toString()}
          onRefresh={async () => {
            await getProduct();
          }}
          refreshing={loading}
        />
      )}
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
  },
  postContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  postText: {
    margin: 10,
    fontSize: 16,
  },
  postContent: {
    color: "blue", // เปลี่ยนสีข้อความที่ถูกส่งกลับมา​
    fontWeight: "bold",
  },
});
