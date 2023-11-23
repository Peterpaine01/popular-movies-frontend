import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";

import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import React, { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screens
import PopularMoviesScreen from "./containers/PopularMoviesScreen";
import MovieScreen from "./containers/MovieScreen";

const Stack = createNativeStackNavigator();
const ApiKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGFjMTk3MjNhNzg4NTAwMTQzODg3YTYiLCJlbWFpbCI6ImZhY2FybGllckBnbWFpbC5jb20iLCJleHBpcmF0aW9uRGF0ZSI6IjIwMjQtMDMtMDhUMDA6MDA6MDAuMDAwWiIsImlzVHJhaW5pbmciOnRydWUsImlhdCI6MTcwMDc0NzA4OH0.gLcRmwgsWOAuztEhLM8QEZrX0x-odQvZIHY9KdBq5oA";
await AsyncStorage.setItem("userToken", ApiKey);

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  // const setToken = async (token) => {
  //   if (token) {
  //     // Connexion
  //     await AsyncStorage.setItem("userToken", token);
  //   } else {
  //     // Deconnexion
  //     await AsyncStorage.removeItem("userToken");
  //   }

  //   setUserToken(token);
  // };

  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      // We should also handle error for production apps
      const userToken = await AsyncStorage.getItem("userToken");

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      setUserToken(userToken);
      console.log();
      setIsLoading(false);
    };

    bootstrapAsync();
  }, []);

  if (isLoading === true) {
    // We haven't finished checking for the token yet
    return <ActivityIndicator />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="PopularMovies"
          options={{
            title: "Films populaires",
            headerStyle: {
              backgroundColor: "#F0F0F0",
            },
            headerTitleStyle: { color: "black" },
          }}
        >
          {() => <PopularMoviesScreen />}
        </Stack.Screen>
        <Stack.Screen
          name="Movie"
          options={{
            title: "Movie name",
            headerStyle: {
              backgroundColor: "#F0F0F0",
            },
            headerTitleStyle: { color: "black" },
          }}
        >
          {() => <MovieScreen />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
