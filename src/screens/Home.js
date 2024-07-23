import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  Image,
  StyleSheet,
  Text,
  ScrollView,
} from "react-native";
import userLogo from "../../assets/userLogo.jpg";
import { Octicons } from "@expo/vector-icons";
import CustomSearchBar from "../components/CustomSearchBar";
import CustomCarousel from "../components/CustomCarousel";
import { Switch } from "react-native-elements";
import ServiceCard from "../components/ServiceCard";
import { serviceCardsData, carosolData } from "../tempData/appData";
import clock from "../../assets/clock.gif";
import hotSale from "../../assets/hot-sale.gif";
import sale from "../../assets/sale.gif";

const Home = () => {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);

  const updateSearch = (text) => {
    setSearch(text);
  };

  const renderCards = () => {
    const rows = [];
    for (let i = 0; i < serviceCardsData.length; i += 3) {
      const rowItems = serviceCardsData.slice(i, i + 3);
      rows.push(
        <View key={i} style={styles.row}>
          {rowItems.map((item) => (
            <View key={item.id} style={styles.cardWrapper}>
              <ServiceCard image={item.image} title={item.title} />
            </View>
          ))}
        </View>
      );
    }
    return rows;
  };

  const dealAndOfferData = [
    { id: "1", title: "Deal 1" },
    { id: "2", title: "Deal 2" },
    { id: "3", title: "Deal 3" },
    // Add more deals if needed
  ];

  return (
    <SafeAreaView style={styles.container}>
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

        <View style={styles.carouselContainer}>
          <CustomCarousel data={carosolData} />
        </View>

        {/* Service Category */}
        <View>
          <Text style={styles.heading}>Service Category</Text>
          <View style={styles.serviceBtnCont}>
            <Text style={styles.serviceType}>Male Service</Text>
            <Switch value={open} onValueChange={setOpen} />
            <Text style={styles.serviceType}>Female Service</Text>
          </View>
        </View>

        {/* Service Cards */}
        <View style={styles.serviceCardContainer}>{renderCards()}</View>
        <Text style={styles.heading}> Deals and Offers</Text>
        {/* Deals and Offers */}
        {/* Deals and Offers */}
        <View style={styles.gifContainer}>
          <Image source={clock} style={styles.gif} resizeMode="contain" />
          <Image source={hotSale} style={styles.gif} resizeMode="contain" />
          <Image source={sale} style={styles.gif} resizeMode="contain" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

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
  carouselContainer: {
    marginTop: 10,
  },
  serviceBtnCont: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 5,
    padding: 5,
  },
  serviceType: {
    fontSize: 20,
    marginTop: 5,
  },
  heading: {
    fontSize: 24,
    textAlign: "center",
  },
  serviceCardContainer: {
    padding: 10,
    backgroundColor: "#f8f8f8",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  cardWrapper: {
    flex: 1,
    marginHorizontal: 5,
  },
  cardContainer: {
    flex: 1,
    margin: 10,
  },
  gifContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 10,
  },
  gif: {
    width: 100,
    height: 100,
    marginHorizontal: 5,
  },
});

export default Home;
