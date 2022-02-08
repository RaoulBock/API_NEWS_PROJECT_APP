import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { NavigationContainer } from "@react-navigation/native";

import News from "./screens/News";
import HomeScreen from "./screens/HomeScreen";

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  ActivityIndicator
} from "react-native";

const stackNavigator = createStackNavigator({
  Home: HomeScreen,
  News: News
});

const App = createAppContainer(stackNavigator);
export default App;
