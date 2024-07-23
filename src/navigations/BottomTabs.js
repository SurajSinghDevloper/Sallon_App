import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Octicons } from "@expo/vector-icons";
import { View, Text } from "react-native";
import Home from "../screens/Home";
import Bookings from "../screens/Bookings";
import AtHome from "../screens/AtHome";
import Profile from "../screens/Profile";

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
      name="AtHome"
      component={AtHome}
      options={{
        tabBarIcon: () => <CustomTabBarIcon name="star" />,
      }}
    />
    <Tab.Screen
      name="Profile"
      component={Profile}
      options={{
        tabBarIcon: () => <CustomTabBarIcon name="profile" />,
      }}
    />
  </Tab.Navigator>
);

export default BottomTabs;
