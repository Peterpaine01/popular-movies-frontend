import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";

import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import React, { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screens
import PopularMoviesScreen from "./containers/PopularMoviesScreen";
import MovieScreen from "./containers/MovieScreen";

const Stack = createNativeStackNavigator();

export default function App() {
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
          {(props) => <PopularMoviesScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen
          name="Movie"
          options={({ route, navigation }) => ({
            title: route.params.title,
            headerStyle: {
              backgroundColor: "#F0F0F0",
            },
            headerTitleStyle: { color: "black" },
          })}
        >
          {(props) => <MovieScreen {...props} />}
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
