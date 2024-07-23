import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import { Octicons } from "@expo/vector-icons";
import userLogo from "../../assets/userLogo.jpg";
import CustomSearchBar from "../components/CustomSearchBar";

const SellerHome = () => {
  const [search, setSearch] = useState("");
  const updateSearch = (text) => {
    setSearch(text);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.topBarContiner}>
          <Image source={userLogo} style={styles.topBarImg} />
          <View style={styles.topBarDetails}>
            <Text style={styles.topBarDetailUserName}>User Kumar Singh</Text>
            <Text style={styles.topBarDetailUserAdd}>
              User Address point to get Service
            </Text>
          </View>
          <View style={styles.notify}>
            <Octicons name="bell" size={27} color="black" />
          </View>
        </View>
        {/* Search bar */}
        <View style={styles.searchBarContainer}>
          <CustomSearchBar
            placeholder="Type Here..."
            value={search}
            onChangeText={updateSearch}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SellerHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  topBarContiner: {
    marginTop: 30,
    flexDirection: "row",
    padding: 7,
    // Shadow for iOS
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1.94,
    // Shadow for Android
    elevation: 2,
    marginLeft: 5,
    marginRight: 5,
  },
  topBarImg: {
    width: 50,
    height: 50,
    marginLeft: 10,
    borderRadius: 50,
  },
  topBarDetails: {
    marginLeft: 10,
  },
  topBarDetailUserName: {
    fontSize: 17,
    fontWeight: "bold",
  },
  topBarDetailUserAdd: {
    fontSize: 14,
  },
  notify: {
    position: "absolute",
    right: 10,
    marginTop: 9,
    padding: 8,
  },
  searchBarContainer: {
    marginLeft: 5,
    marginRight: 5,
    padding: 5,
  },
});
