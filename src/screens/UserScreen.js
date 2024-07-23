import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Octicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import Home from "./Home";
import Bookings from "./Bookings";
import NearBy from "./NearBy";
import AtHome from "./AtHome";
import Profile from "./Profile";

const Tab = createBottomTabNavigator();

const HomeTabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;
        let IconComponent;

        switch (route.name) {
          case "Home":
            iconName = "home";
            IconComponent = Octicons;
            break;
          case "Bookings":
            iconName = "calendar";
            IconComponent = Octicons;
            break;
          case "NearBy":
            iconName = "location-pin";
            IconComponent = Entypo;
            break;
          case "AtHome":
            iconName = "house-flag";
            IconComponent = FontAwesome6;
            break;
          case "Profile":
            iconName = "user";
            IconComponent = Entypo;
            break;
        }

        return <IconComponent name={iconName} size={size} color={color} />;
      },
    })}
  >
    <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
    <Tab.Screen
      name="Bookings"
      component={Bookings}
      options={{ headerShown: false }}
    />
    <Tab.Screen
      name="NearBy"
      component={NearBy}
      options={{ headerShown: false }}
    />
    <Tab.Screen
      name="AtHome"
      component={AtHome}
      options={{ headerShown: false }}
    />
    <Tab.Screen
      name="Profile"
      component={Profile}
      options={{ headerShown: false }}
    />
  </Tab.Navigator>
);

const UserScreen = () => {
  return (
    <NavigationContainer>
      <HomeTabs />
    </NavigationContainer>
  );
};

export default UserScreen;
