import {
  View,
  Text,
  ListRenderItem,
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Dimensions,
} from "react-native";
import React, { useCallback, useLayoutEffect, useState } from "react";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { findProductbyId } from "../services/product-service";
import { ListItem, Tile } from "@rneui/base";

const DetailScreen = (): React.JSX.Element => {
  const route = useRoute<any>();
  const { item } = route.params;
  const navigation = useNavigation<any>();
  const [detail, setDetail] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: item.title,
    });
  }, [navigation, route]);

  const getProductbyId = async () => {
    try {
      setLoading(true);
      const res = await findProductbyId(item.id);
      //   console.log(res.data.data);
      setDetail(res.data.data);
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getProductbyId();
    }, [])
  );

  const _renderItem: ListRenderItem<any> = ({ item }) => {
    return (
      <>
        <Tile
          imageSrc={{
            uri: "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0yMjItbWluZC0xNl8xLmpwZw.jpg",
            cache: "force-cache",
          }}
          title={item.ch_title}
          titleStyle={styles.titleStyle}
          containerStyle={styles.tileContainer}
          caption={item.ch_dateadd}
          captionStyle={styles.captionStyle}
          featured
          activeOpacity={0.9}
          width={Dimensions.get("screen").width - 20} // ลบขอบเล็กน้อยทั้งสองข้าง
        />
      </>
    );
  };

  return (
    <View>
      {loading ? ( // Still loading and show ActivityIndicator
        <ActivityIndicator size="large" color="blue" />
      ) : (
        <FlatList
          data={detail}
          renderItem={_renderItem}
          keyExtractor={(item: any) => item.ch_id.toString()}
          onRefresh={async () => {
            await getProductbyId();
          }}
          refreshing={loading}
          contentContainerStyle={styles.listContent}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f0f0f0", // สีพื้นหลัง
  },
  listContent: {
    paddingHorizontal: 10, // การเว้นวรรคขอบซ้ายและขวาเท่ากัน
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#161D6F", // สีขาวสำหรับชื่อ
  },
  tileContainer: {
    borderRadius: 10, //กำหนดให้มุมของ container มีความโค้งมน
    overflow: "hidden", //กำหนดให้เนื้อหาที่อาจล้นออกจากขอบของ container ไม่แสดงผล
    marginBottom: 10, //กำหนดระยะห่างจากขอบล่างของ container ไปยัง element ต่อไปที่อยู่ด้านล่าง
    elevation: 5, // เงาสำหรับ Android
    shadowOffset: { width: 0, height: 2 }, //ก าหนดต าแหน่งของเงาที่แสดงผล
    shadowOpacity: 0.25, //กำหนดระดับความโปร่งแสงของเงา
    shadowRadius: 3.84, //กำหนดรัศมีของการกระจายตัวของเงา
    opacity: 0.5, // ความโปร่งใสของภาพ , ค่าน้อยจะโปร่งใสมาก
  },
  captionStyle: {
    fontSize: 14,
    color: "#1E2A5E", // สีขาวสำหรับวันที่
  },
});
export default DetailScreen;
