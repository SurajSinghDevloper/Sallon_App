import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Octicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";

// Import your screens
import AtHome from "./src/screens/AtHome";
import Home from "./src/screens/Home";
import Bookings from "./src/screens/Bookings";
import NearBy from "./src/screens/NearBy";
import Profile from "./src/screens/Profile";

// Create the bottom tab navigator
const Tab = createBottomTabNavigator();

// Create the stack navigator
const Stack = createStackNavigator();

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
            iconName = "location-pin"; // This icon is from Entypo
            IconComponent = Entypo;
            break;
          case "AtHome":
            iconName = "house-flag";
            IconComponent = FontAwesome6;
            break;
          case "profile":
            iconName = "user"; // This icon is from Entypo
            IconComponent = Entypo;
            break;
        }

        return <IconComponent name={iconName} size={size} color={color} />;
      },
    })}
  >
    <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
    <Tab.Screen name="Bookings" component={Bookings} />
    <Tab.Screen name="NearBy" component={NearBy} />
    <Tab.Screen name="AtHome" component={AtHome} />
    <Tab.Screen name="profile" component={Profile} />
  </Tab.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeTabs">
        <Stack.Screen
          name="HomeTabs"
          component={HomeTabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
