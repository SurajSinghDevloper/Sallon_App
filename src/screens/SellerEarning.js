import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import {
  FontAwesome,
  Ionicons,
  FontAwesome5,
  MaterialIcons,
  AntDesign,
} from "@expo/vector-icons";

const SellerEarning = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Grow With Us</Text>
        <Text style={styles.headerText}>Earnings</Text>
      </View>

      <View style={styles.earningCard}>
        <Text style={styles.cardTitle}>Primary Bank Details</Text>
        <View style={styles.detailsRow}>
          <FontAwesome name="bank" size={20} color="#4CAF50" />
          <Text style={styles.detailsText}>Bank Name: XYZ Bank</Text>
        </View>
        <View style={styles.detailsRow}>
          <FontAwesome name="user" size={20} color="#4CAF50" />
          <Text style={styles.detailsText}>Account Holder: John Doe</Text>
        </View>
        <View style={styles.detailsRow}>
          <FontAwesome name="credit-card" size={20} color="#4CAF50" />
          <Text style={styles.detailsText}>Account Number: 1234 5678 9012</Text>
        </View>
      </View>

      <View style={styles.earningCard}>
        <Text style={styles.cardTitle}>Earnings Summary</Text>
        <View style={styles.detailsRow}>
          <FontAwesome name="rupee" size={20} color="#2196F3" />
          <Text style={styles.detailsText}>Settled Amount: ₹5,000</Text>
        </View>
        <View style={styles.detailsRow}>
          <FontAwesome name="rupee" size={20} color="#FFC107" />
          <Text style={styles.detailsText}>Pending Amount: ₹1,200</Text>
        </View>
        <View style={styles.detailsRow}>
          <FontAwesome name="rupee" size={20} color="#4CAF50" />
          <Text style={styles.detailsText}>Total Amount: ₹6,200</Text>
        </View>
      </View>

      <View style={styles.earningCard}>
        <Text style={styles.cardTitle}>Earnings by Period</Text>
        <View style={styles.detailsRow}>
          <Ionicons name="today-outline" size={20} color="#FF5722" />
          <Text style={styles.detailsText}>Today: ₹1,000</Text>
        </View>
        <View style={styles.detailsRow}>
          <FontAwesome name="calendar" size={20} color="#FF5722" />
          <Text style={styles.detailsText}>Yesterday: ₹800</Text>
        </View>
        <View style={styles.detailsRow}>
          <FontAwesome5 name="calendar-week" size={24} color="#FF5722" />
          <Text style={styles.detailsText}>This Week: ₹4,000</Text>
        </View>
        <View style={styles.detailsRow}>
          <MaterialIcons name="calendar-month" size={24} color="#FF5722" />
          <Text style={styles.detailsText}>This Month: ₹16,000</Text>
        </View>
        <View style={styles.detailsRow}>
          <AntDesign name="calendar" size={24} color="black" />
          <Text style={styles.detailsText}>This Year: ₹60,000</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 15,
  },
  header: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    alignItems: "center",
    marginTop: 15,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  earningCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 20,
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

export default SellerEarning;
