import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { servicesData } from "../tempData/appData";

const AtHome = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.grid}>
        {servicesData.map((service) => (
          <View key={service.id} style={styles.card}>
            <Image
              source={{ uri: service.image }}
              style={styles.serviceImage}
            />
            <View style={styles.cardContent}>
              <Text style={styles.serviceName}>{service.name}</Text>
              <Text style={styles.description}>{service.description}</Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>View </Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.bookButton]}>
                  <Text style={styles.buttonText}>Book </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    backgroundColor: "#f8f8f8",
    borderRadius: 10,
    width: "48%",
    marginVertical: 10,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
  },
  serviceImage: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
  },
  cardContent: {
    padding: 15,
  },
  serviceName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: "#555",
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignItems: "center",
    flex: 1,
    marginHorizontal: 5,
  },
  bookButton: {
    backgroundColor: "#28A745",
  },
  buttonText: {
    color: "#fff",
    flex: 1,
  },
});

export default AtHome;
