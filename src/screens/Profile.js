import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";

const user = {
  name: "Suraj Kumar Singh",
  phone: "+123 456 7890",
  age: 28,
  gender: "Male",
  address: "123 Main Street, City, Country",
  bankDetails: "Bank XYZ - Account: 123456789",
  allottedOffers: ["20% Off on Haircut", "10% Off on Manicure"],
  availedOffers: ["15% Off on Facial"],
  favSalons: ["Elegant Salon", "Chic Hair Studio"],
  favServices: ["Haircut", "Facial"],
  image: "https://example.com/user-image.jpg",
};

const Profile = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileHeader}>
        <Image source={{ uri: user.image }} style={styles.profileImage} />
        <Text style={styles.name}>{user.name}</Text>
        <View style={styles.row}>
          <MaterialIcons name="phone" size={20} color="#555" />
          <Text style={styles.phone}>{user.phone}</Text>
        </View>
        <View style={styles.row}>
          <FontAwesome name="calendar" size={20} color="#555" />
          <Text style={styles.ageGender}>{user.age} years old</Text>
        </View>
        <View style={styles.row}>
          <FontAwesome name="venus-mars" size={20} color="#555" />
          <Text style={styles.ageGender}>{user.gender}</Text>
        </View>
      </View>

      <View style={styles.detailsContainer}>
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Contact</Text>
          <Text style={styles.detail}>{user.address}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Bank Details</Text>
          <Text style={styles.detail}>{user.bankDetails}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Allotted Offers</Text>
          {user.allottedOffers.map((offer, index) => (
            <Text key={index} style={styles.offer}>
              {offer}
            </Text>
          ))}
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Availed Offers</Text>
          {user.availedOffers.map((offer, index) => (
            <Text key={index} style={styles.offer}>
              {offer}
            </Text>
          ))}
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Favorite Salons</Text>
          {user.favSalons.map((salon, index) => (
            <Text key={index} style={styles.favorite}>
              {salon}
            </Text>
          ))}
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Favorite Services</Text>
          {user.favServices.map((service, index) => (
            <Text key={index} style={styles.favorite}>
              {service}
            </Text>
          ))}
        </View>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  profileHeader: {
    alignItems: "center",
    marginBottom: 20,
    padding: 15,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  phone: {
    fontSize: 16,
    color: "#555",
    marginLeft: 10,
  },
  ageGender: {
    fontSize: 16,
    color: "#555",
    marginLeft: 10,
  },
  detailsContainer: {
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  detail: {
    fontSize: 16,
    color: "#333",
  },
  offer: {
    fontSize: 16,
    color: "#007BFF",
    marginBottom: 5,
  },
  favorite: {
    fontSize: 16,
    color: "#555",
    marginBottom: 5,
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Profile;
