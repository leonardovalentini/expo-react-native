import Ionicons from "@react-native-vector-icons/ionicons/static";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomeScreen from "../screens/Welcome";
import NewCustomer from "../screens/customers/New";
import UpdateCustomer from "../screens/customers/Update";
import DetailsCustomer from "../screens/customers/Details";
import CustomersList from "../screens/customers/List";
import Regions from "../screens/Regions";
import Status from "../screens/Status";
import { navigate } from "../navigation/NavigationService";

import { navigationRef } from "./NavigationService";

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const CustomersStack = createNativeStackNavigator();
const RegionsStack = createNativeStackNavigator();
const StatusStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator initialRouteName={"Welcome"}>
      <HomeStack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
}

function CustomersStackScreen() {
  return (
    <CustomersStack.Navigator initialRouteName={"Customers"}>
      <CustomersStack.Screen
        name="Customers"
        options={(props) => {
          const { params } = props.route;
          let region = "";
          let status = "";
          if (params && (params as { region: string }).region) {
            region = (params as { region: string }).region;
          }
          if (params && (params as { status: string }).status) {
            status = (params as { status: string }).status;
          }
          let title = "Customers List";
          if (region) {
            title = `Customers List for ${region}`;
          } else if (status) {
            title = `Customers List with ${status.toLocaleLowerCase()} status`;
          }
          return {
            title,
          };
        }}
        component={CustomersList}
      />
      <CustomersStack.Screen
        name="NewCustomer"
        options={{
          title: "New Customer",
        }}
        component={NewCustomer}
      />
      <CustomersStack.Screen
        name="UpdateCustomer"
        options={{
          title: "Update Customer",
        }}
        component={UpdateCustomer}
      />
      <CustomersStack.Screen
        name="DetailsCustomer"
        options={{
          title: "Customer Details",
        }}
        component={DetailsCustomer}
      />
    </CustomersStack.Navigator>
  );
}

function RegionsStackScreen() {
  return (
    <RegionsStack.Navigator initialRouteName={"Regions"}>
      <RegionsStack.Screen
        name="Regions"
        options={{
          title: "Regions List",
          headerShown: false,
        }}
        component={Regions}
      />
    </RegionsStack.Navigator>
  );
}

function StatusStackScreen() {
  return (
    <StatusStack.Navigator initialRouteName={"Status"}>
      <StatusStack.Screen
        name="Status"
        options={{
          title: "Status List",
          headerShown: false,
        }}
        component={Status}
      />
    </StatusStack.Navigator>
  );
}

const Routes = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarShowLabel: false,
          headerShown: false,

          tabBarIcon: ({ focused, size, color }) => {
            let iconName:
              | "home"
              | "home-outline"
              | "people"
              | "people-outline"
              | "globe"
              | "globe-outline"
              | "radio-button-on"
              | "radio-button-on-outline" = "people";

            if (route.name === "HomeTab") {
              iconName = focused ? "home" : "home-outline";
            }

            if (route.name === "CustomersTab") {
              iconName = focused ? "people" : "people-outline";
            }
            if (route.name === "RegionsTab") {
              iconName = focused ? "globe" : "globe-outline";
            }
            if (route.name === "StatusTab") {
              iconName = focused
                ? "radio-button-on"
                : "radio-button-on-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "emerald",
          tabBarInactiveTintColor: "gray",
        })}
        screenListeners={({ route }) => ({
          tabPress: (e) => {
            if (route.name === "CustomersTab") {
              e.preventDefault();

              navigate("CustomersTab", {
                screen: "Customers",
                params: {},
              });
            }
          },
        })}
      >
        <Tab.Screen name="HomeTab" component={HomeStackScreen} />
        <Tab.Screen name="CustomersTab" component={CustomersStackScreen} />
        <Tab.Screen name="RegionsTab" component={RegionsStackScreen} />
        <Tab.Screen name="StatusTab" component={StatusStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
