import React from "react";
import { View, FlatList, Image, Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

const CustomCarousel = ({ data }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  itemContainer: {
    width: width - 40,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: width - 40,
    height: 200,
    borderRadius: 10,
  },
});

export default CustomCarousel;
