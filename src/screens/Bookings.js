import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons, FontAwesome, Ionicons } from "@expo/vector-icons";

const bookingsData = [
  {
    id: "1",
    date: "2024-07-25",
    time: "10:00 AM",
    location: "123 Main St, City",
    contact: "123-456-7890",
    stylist: {
      name: "Jane Doe",
      image: "https://example.com/stylist1.jpg",
    },
    services: [
      { id: "1", name: "Hair Cut", duration: "30 mins" },
      { id: "2", name: "Beard Trim", duration: "15 mins" },
      { id: "3", name: "Shampoo", duration: "10 mins" },
      { id: "4", name: "Conditioning", duration: "20 mins" },
    ],
    notes: "Please be on time",
    price: "$50",
    paymentMethod: "Paid",
  },
  {
    id: "2",
    date: "2024-07-26",
    time: "2:00 PM",
    location: "456 Another St, City",
    contact: "987-654-3210",
    stylist: {
      name: "John Smith",
      image: "https://example.com/stylist2.jpg",
    },
    services: [
      { id: "5", name: "Hair Color", duration: "1 hour" },
      { id: "6", name: "Hair Treatment", duration: "45 mins" },
      { id: "7", name: "Scalp Massage", duration: "15 mins" },
      { id: "8", name: "Hair Mask", duration: "30 mins" },
    ],
    notes: "Allergic to certain dyes",
    price: "$120",
    paymentMethod: "COD",
  },
];

const Bookings = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Upcoming Bookings</Text>
      {bookingsData.map((booking) => (
        <View key={booking.id} style={styles.bookingCard}>
          <View style={styles.ticketHeader}>
            <Text style={styles.date}>{booking.date}</Text>
            <Text style={styles.time}>{booking.time}</Text>
          </View>
          <View style={styles.ticketBody}>
            <View style={styles.stylistContainer}>
              <Image
                source={{ uri: booking.stylist.image }}
                style={styles.stylistImage}
              />
              <Text style={styles.stylistName}>{booking.stylist.name}</Text>
            </View>
            <View style={styles.servicesContainer}>
              {booking.services.map((service) => (
                <View key={service.id} style={styles.service}>
                  <Text style={styles.serviceName}>{service.name}</Text>
                  <Text style={styles.serviceDuration}>{service.duration}</Text>
                </View>
              ))}
            </View>
            <View style={styles.detailsContainer}>
              <View style={styles.locationContainer}>
                <MaterialIcons name="location-pin" size={20} color="black" />
                <Text style={styles.location}>{booking.location}</Text>
              </View>
              <View style={styles.contactContainer}>
                <FontAwesome name="phone" size={20} color="black" />
                <Text style={styles.contact}>{booking.contact}</Text>
              </View>
              <Text style={styles.notes}>{booking.notes}</Text>
              <View style={styles.paymentContainer}>
                <Text style={styles.price}>{booking.price}</Text>
                <Text style={styles.paymentMethod}>
                  {booking.paymentMethod}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.ticketFooter}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Reschedule</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.cancelButton]}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            <Ionicons
              name="pricetag"
              size={30}
              color="black"
              style={styles.ticketIcon}
            />
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  bookingCard: {
    backgroundColor: "#f8f8f8",
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
  },
  ticketHeader: {
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingBottom: 10,
    marginBottom: 10,
  },
  date: {
    fontSize: 18,
    fontWeight: "bold",
  },
  time: {
    fontSize: 16,
    marginVertical: 5,
  },
  ticketBody: {
    paddingVertical: 10,
  },
  stylistContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  stylistImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  stylistName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  servicesContainer: {
    marginVertical: 10,
  },
  service: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  serviceName: {
    fontSize: 16,
  },
  serviceDuration: {
    fontSize: 14,
    color: "#666",
  },
  detailsContainer: {
    marginVertical: 10,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  location: {
    marginLeft: 5,
    fontSize: 14,
    color: "#555",
  },
  contactContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  contact: {
    marginLeft: 5,
    fontSize: 14,
    color: "#555",
  },
  notes: {
    fontSize: 14,
    fontStyle: "italic",
    color: "#666",
    marginTop: 10,
  },
  paymentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
  },
  paymentMethod: {
    fontSize: 14,
    color: "#555",
  },
  ticketFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  button: {
    backgroundColor: "#2196F3",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  cancelButton: {
    backgroundColor: "#f44336",
  },
  ticketIcon: {
    marginLeft: 10,
  },
});

export default Bookings;
