import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Button, SafeAreaView } from "react-native";
import NewsCard from "../component/NewsCard";

import newAPI from "../api/News";

const News = ({ navigation }) => {

  useEffect(() => {
    getNewsFromAPI();
  }, []);

  const newsResponse = async () => {
    const response = await newAPI.get(
      "top-headlines?country=us&apiKey=245b4ed876e344d0a083dc5c4604eba9"
    );
    console.log(response.data);
  };

  function getNewsFromAPI() {
      newAPI.get('top-headlines?country=us&apiKey=245b4ed876e344d0a083dc5c4604eba9')
      .then(function(response) {
          console.log(response.data)
      })
      .catch(function(error) {
          console.log(error)
      }) 
  }

  return (
    <SafeAreaView>
      {/* <Text>News Screen</Text> */}
      <NewsCard />
    </SafeAreaView>
  );
};

export default News;
