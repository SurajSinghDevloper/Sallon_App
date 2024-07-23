import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import {
  FontAwesome,
  MaterialIcons,
  Ionicons,
  Entypo,
} from "@expo/vector-icons";

const SellerProfile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerText}>Grow With Us</Text>
          <Text style={styles.headerText}>Earnings</Text>
        </View>

        <View style={styles.profileHeader}>
          <Image
            style={styles.profileImage}
            source={{ uri: "https://example.com/profile-image.jpg" }} // Replace with actual image URL
          />
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>John Doe</Text>
            <Text style={styles.profileEmail}>john.doe@example.com</Text>
            <Text style={styles.profilePhone}>+123 456 7890</Text>
            <Text style={styles.profileDetails}>
              <FontAwesome name="id-card" size={20} color="#4CAF50" /> Age: 35
            </Text>
            <Text style={styles.profileDetails}>
              <FontAwesome name="venus-mars" size={20} color="#4CAF50" />{" "}
              Gender: Male
            </Text>
          </View>
        </View>

        <View style={styles.profileCard}>
          <Text style={styles.cardTitle}>Shop Details</Text>
          <View style={styles.detailsRow}>
            <Entypo name="shop" size={20} color="#4CAF50" />
            <Text style={styles.detailsText}>Shop Name: Trendy Salon</Text>
          </View>
          <View style={styles.detailsRow}>
            <FontAwesome name="map-marker" size={20} color="#4CAF50" />
            <Text style={styles.detailsText}>
              Shop Location: 123 Main Street, City
            </Text>
          </View>
          <View style={styles.detailsRow}>
            <FontAwesome name="check-circle" size={20} color="#4CAF50" />
            <Text style={styles.detailsText}>Verified: Yes</Text>
          </View>
        </View>

        <View style={styles.profileCard}>
          <Text style={styles.cardTitle}>Ratings & Feedback</Text>
          <View style={styles.detailsRow}>
            <FontAwesome name="star" size={20} color="#FFD700" />
            <Text style={styles.detailsText}>Rating: 4.5</Text>
          </View>
          <View style={styles.detailsRow}>
            <FontAwesome name="comments" size={20} color="#2196F3" />
            <Text style={styles.detailsText}>Feedback: Excellent service!</Text>
          </View>
        </View>

        <View style={styles.profileCard}>
          <Text style={styles.cardTitle}>Contact Details</Text>
          <View style={styles.detailsRow}>
            <MaterialIcons name="location-on" size={20} color="#4CAF50" />
            <Text style={styles.detailsText}>
              Address: 456 Elm Street, City
            </Text>
          </View>
          <View style={styles.detailsRow}>
            <FontAwesome name="phone" size={20} color="#4CAF50" />
            <Text style={styles.detailsText}>Phone: +123 456 7890</Text>
          </View>
        </View>

        <View style={styles.profileCard}>
          <Text style={styles.cardTitle}>Bank Details</Text>
          <View style={styles.detailsRow}>
            <FontAwesome name="university" size={20} color="#4CAF50" />
            <Text style={styles.detailsText}>Bank: ABC Bank</Text>
          </View>
          <View style={styles.detailsRow}>
            <Ionicons name="person-circle" size={20} color="#4CAF50" />
            <Text style={styles.detailsText}>Account Holder: John Doe</Text>
          </View>
          <View style={styles.detailsRow}>
            <FontAwesome name="money" size={20} color="#4CAF50" />
            <Text style={styles.detailsText}>Account Number: 1234567890</Text>
          </View>
        </View>

        <View style={styles.profileCard}>
          <Text style={styles.cardTitle}>Favorite Salon</Text>
          <View style={styles.detailsRow}>
            <FontAwesome name="heart" size={20} color="#E91E63" />
            <Text style={styles.detailsText}>Favorite Salon: Trendy Salon</Text>
          </View>
        </View>

        <View style={styles.profileCard}>
          <Text style={styles.cardTitle}>Favorite Service</Text>
          <View style={styles.detailsRow}>
            <MaterialIcons name="favorite" size={20} color="#E91E63" />
            <Text style={styles.detailsText}>Favorite Service: Haircut</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  header: {
    backgroundColor: "#4CAF50",
    paddingVertical: 15,
    alignItems: "center",
  },
  headerText: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
  },
  profileHeader: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 15,
    margin: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  profileEmail: {
    fontSize: 16,
    color: "#555",
  },
  profilePhone: {
    fontSize: 16,
    color: "#555",
  },
  profileDetails: {
    fontSize: 16,
    color: "#555",
    marginTop: 5,
  },
  profileCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 15,
    margin: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  detailsRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  detailsText: {
    fontSize: 16,
    marginLeft: 10,
    color: "#555",
  },
});

export default SellerProfile;
