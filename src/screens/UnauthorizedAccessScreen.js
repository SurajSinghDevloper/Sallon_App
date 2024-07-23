import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const UnauthorizedAccessScreen = () => {
  return (
    <View style={styles.container}>
      <FontAwesome name="lock" size={80} color="#FF6F6F" style={styles.icon} />
      <Text style={styles.title}>Unauthorized Access</Text>
      <Text style={styles.message}>
        You do not have the necessary permissions to access this page.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F2F2F2",
    padding: 20,
  },
  icon: {
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FF6F6F",
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
  },
});

export default UnauthorizedAccessScreen;
