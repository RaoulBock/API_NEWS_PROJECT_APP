import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Button, SafeAreaView } from "react-native";
import NewsCard from "../component/NewsCard";

import newAPI from "../api/News";

const News = ({ navigation }) => {
  useEffect(() => {
    newsResponse();
  }, []);

  const newsResponse = async () => {
    const response = await newAPI.get(
      "top-headlines?country=us&apiKey=245b4ed876e344d0a083dc5c4604eba9"
    );
    console.log(response.data);
  };

  return (
    <SafeAreaView>
      {/* <Text>News Screen</Text> */}
      <NewsCard />
    </SafeAreaView>
  );
};

export default News;
