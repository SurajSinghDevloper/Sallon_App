import React, { useState, useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import SellerScreen from "./src/screens/SellerScreen";
import UserScreen from "./src/screens/UserScreen";
import UnauthorizedAccessScreen from "./src/screens/UnauthorizedAccessScreen";

const App = () => {
  const [userType, setUserType] = useState(null);
  const [loading, setLoading] = useState(true);

  // Simulating fetching user type (you can replace this with actual API call or AsyncStorage retrieval)
  useEffect(() => {
    const fetchUserType = async () => {
      // Simulating an API call with a timeout
      setTimeout(() => {
        // Replace this with your actual logic to get the user type
        const userTypeFromApi = "seller"; // or "seller" or null
        setUserType(userTypeFromApi);
        console.log("✔✔✔✔✔✔✔✔");
        setLoading(false);
      }, 1000); // Simulating 1 second delay
    };

    fetchUserType();
  }, []);

  const renderScreen = (type) => {
    switch (type) {
      case "user":
        return <UserScreen />;
      case "seller":
        return <SellerScreen />;
      default:
        return <UnauthorizedAccessScreen />;
    }
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return renderScreen(userType);
};

export default App;
