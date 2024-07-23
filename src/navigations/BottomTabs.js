import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./src/screens/Home";
import Bookings from "./src/screens/Bookings";
import AtSallon from "./src/screens/AtSallon";
import AtHome from "./src/screens/AtHome";
import { Octicons } from "@expo/vector-icons";
import { View, Text } from "react-native";

const Tab = createBottomTabNavigator();

const CustomTabBarIcon = ({ name }) => (
  <View style={{ alignItems: "center" }}>
    <Octicons name={name} size={24} color="black" />
    <Text>{name}</Text>
  </View>
);

const BottomTabs = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarIcon: () => <CustomTabBarIcon name="home" />,
      }}
    />
    <Tab.Screen
      name="Bookings"
      component={Bookings}
      options={{
        tabBarIcon: () => <CustomTabBarIcon name="calendar" />,
      }}
    />
    <Tab.Screen
      name="AtSallon"
      component={AtSallon}
      options={{
        tabBarIcon: () => <CustomTabBarIcon name="star" />,
      }}
    />
    <Tab.Screen
      name="Profile"
      component={AtHome}
      options={{
        tabBarIcon: () => <CustomTabBarIcon name="profile" />,
      }}
    />
  </Tab.Navigator>
);

export default BottomTabs;
