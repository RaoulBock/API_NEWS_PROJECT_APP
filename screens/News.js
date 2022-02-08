import React from "react";
import { View, StyleSheet, Text, Button, SafeAreaView } from "react-native";
import NewsCard from "../component/NewsCard";

const News = ({ navigation }) => {
  return (
    <SafeAreaView>
      {/* <Text>News Screen</Text> */}
      <NewsCard />
    </SafeAreaView>
  );
};

export default News;
