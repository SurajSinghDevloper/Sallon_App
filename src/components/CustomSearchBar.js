// CustomSearchBar.js
import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";

const CustomSearchBar = ({ placeholder, value, onChangeText }) => {
  return (
    <View style={styles.container}>
      <Icon name="search" size={20} color="#000" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 8,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    margin: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
});

export default CustomSearchBar;
