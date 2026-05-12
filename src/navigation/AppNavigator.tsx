import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  Home,
  Search,
  BatteryCharging,
  Star,
} from "lucide-react-native";

import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import StationScreen from "../screens/StationScreen";
import ReviewsScreen from "../screens/ReviewsScreen";

import { colors } from "../theme/colors";

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,

          tabBarStyle: {
            height: 72,
            borderTopWidth: 0,
            elevation: 0,
          },

          tabBarActiveTintColor: colors.primary,
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Home color={color} size={22} />
            ),
          }}
        />

        <Tab.Screen
          name="Buscar"
          component={SearchScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Search color={color} size={22} />
            ),
          }}
        />

        <Tab.Screen
          name="Estação"
          component={StationScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <BatteryCharging
                color={color}
                size={22}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Avaliações"
          component={ReviewsScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Star color={color} size={22} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
