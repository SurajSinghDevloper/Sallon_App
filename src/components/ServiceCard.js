import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ServiceCard = ({ image, title }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 10,
    elevation: 2,
    backgroundColor: "#fff",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowColor: "#000",
    margin: 5,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 150,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    padding: 10,
  },
});

export default ServiceCard;
