import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

const orders = [
  // Pending Orders
  {
    id: "1",
    status: "Pending",
    location: "123 Main Street, City",
    service: "Haircut",
    price: "$20",
    user: {
      name: "John Doe",
      contact: "+1234567890",
    },
  },
  {
    id: "2",
    status: "Pending",
    location: "456 Elm Street, City",
    service: "Manicure",
    price: "$30",
    user: {
      name: "Jane Smith",
      contact: "+0987654321",
    },
  },
  {
    id: "3",
    status: "Pending",
    location: "789 Oak Avenue, City",
    service: "Facial",
    price: "$40",
    user: {
      name: "Alice Johnson",
      contact: "+1122334455",
    },
  },
  // Approved Orders
  {
    id: "4",
    status: "Approved",
    location: "101 Pine Road, City",
    service: "Massage",
    price: "$50",
    user: {
      name: "Bob Brown",
      contact: "+5566778899",
    },
  },
  {
    id: "5",
    status: "Approved",
    location: "202 Maple Lane, City",
    service: "Pedicure",
    price: "$25",
    user: {
      name: "Emily White",
      contact: "+2233445566",
    },
  },
  {
    id: "6",
    status: "Approved",
    location: "303 Birch Street, City",
    service: "Waxing",
    price: "$35",
    user: {
      name: "Michael Green",
      contact: "+6677889900",
    },
  },
  // Completed Orders
  {
    id: "7",
    status: "Completed",
    location: "404 Cedar Drive, City",
    service: "Haircut",
    price: "$20",
    user: {
      name: "Sarah Davis",
      contact: "+3344556677",
    },
  },
  {
    id: "8",
    status: "Completed",
    location: "505 Spruce Avenue, City",
    service: "Facial",
    price: "$40",
    user: {
      name: "David Wilson",
      contact: "+9988776655",
    },
  },
  {
    id: "9",
    status: "Completed",
    location: "606 Fir Street, City",
    service: "Massage",
    price: "$50",
    user: {
      name: "Laura Moore",
      contact: "+4433221100",
    },
  },
];

const SellerOrder = () => {
  const renderOrder = (order) => (
    <View key={order.id} style={styles.orderCard}>
      <Text style={styles.orderTitle}>{order.service}</Text>
      <Text style={styles.orderDetail}>Location: {order.location}</Text>
      <Text style={styles.orderDetail}>Price: {order.price}</Text>
      <Text style={styles.orderDetail}>User: {order.user.name}</Text>
      <Text style={styles.orderDetail}>Contact: {order.user.contact}</Text>
      <View style={styles.buttonContainer}>
        {order.status === "Pending" && (
          <>
            <TouchableOpacity style={styles.buttonApprove}>
              <Text style={styles.buttonText}>Approve</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonReject}>
              <Text style={styles.buttonText}>Reject</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonSchedule}>
              <Text style={styles.buttonText}>Schedule</Text>
            </TouchableOpacity>
          </>
        )}
        {order.status === "Approved" && (
          <TouchableOpacity style={styles.buttonComplete}>
            <Text style={styles.buttonText}>Mark as Completed</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.header}>Your's Orders</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Pending Orders</Text>
          {orders
            .filter((order) => order.status === "Pending")
            .map(renderOrder)}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Approved Orders</Text>
          {orders
            .filter((order) => order.status === "Approved")
            .map(renderOrder)}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Completed Orders</Text>
          {orders
            .filter((order) => order.status === "Completed")
            .map(renderOrder)}
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
  scrollContainer: {
    padding: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 5,
    textAlign: "center",
    color: "#333",
    padding: 5,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  orderCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  orderTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
  },
  orderDetail: {
    fontSize: 16,
    color: "#555",
    marginBottom: 5,
  },
  buttonContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonApprove: {
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    flex: 1,
    marginRight: 5,
  },
  buttonReject: {
    backgroundColor: "#F44336",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    flex: 1,
    marginHorizontal: 5,
  },
  buttonSchedule: {
    backgroundColor: "#FFC107",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    flex: 1,
    marginLeft: 5,
  },
  buttonComplete: {
    backgroundColor: "#2196F3",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    flex: 1,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});

export default SellerOrder;
