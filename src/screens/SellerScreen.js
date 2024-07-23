import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text } from "react-native";
import {
  Octicons,
  Entypo,
  FontAwesome,
  MaterialCommunityIcons,
  Ionicons,
} from "@expo/vector-icons";
import SellerHome from "./SellerHome";
import SellerOrder from "./SellerOrder";
import SellerProfile from "./SellerProfile";
import SellerEarning from "./SellerEarning";

const Tab = createBottomTabNavigator();

const CustomTabBarIcon = ({ name, iconSource, label }) => {
  // Determine which icon component to use
  let IconComponent;
  switch (iconSource) {
    case "Octicons":
      IconComponent = Octicons;
      break;
    case "Ionicons":
      IconComponent = Ionicons;
      break;
    case "Entypo":
      IconComponent = Entypo;
      break;
    case "FontAwesome":
      IconComponent = FontAwesome;
      break;
    case "MaterialCommunityIcons":
      IconComponent = MaterialCommunityIcons;
      break;
    default:
      IconComponent = Octicons; // Fallback icon
  }

  return (
    <View style={{ alignItems: "center" }}>
      <IconComponent name={name} size={24} color="black" />
      <Text>{label}</Text>
    </View>
  );
};

const SellerTabs = () => (
  <Tab.Navigator screenOptions={{ tabBarShowLabel: false }}>
    <Tab.Screen
      name="SellerHome"
      component={SellerHome}
      options={{
        headerShown: false,
        tabBarIcon: () => (
          <CustomTabBarIcon name="home" iconSource="Octicons" label="Home" />
        ),
      }}
    />
    <Tab.Screen
      name="SellerOrder"
      component={SellerOrder}
      options={{
        headerShown: false,
        tabBarIcon: () => (
          <CustomTabBarIcon
            name="book-check-outline"
            iconSource="MaterialCommunityIcons"
            label="Order"
          />
        ),
      }}
    />
    <Tab.Screen
      name="SellerEarning"
      component={SellerEarning}
      options={{
        headerShown: false,
        tabBarIcon: () => (
          <CustomTabBarIcon
            name="rupee"
            iconSource="FontAwesome"
            label="Earning"
          />
        ),
      }}
    />
    <Tab.Screen
      name="SellerProfile"
      component={SellerProfile}
      options={{
        headerShown: false,
        tabBarIcon: () => (
          <CustomTabBarIcon
            name="person-outline"
            iconSource="Ionicons"
            label="Profile"
          />
        ),
      }}
    />
  </Tab.Navigator>
);

const SellerScreen = () => {
  return (
    <NavigationContainer>
      <SellerTabs />
    </NavigationContainer>
  );
};

export default SellerScreen;
