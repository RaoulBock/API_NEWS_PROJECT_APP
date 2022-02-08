import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  SafeAreaView,
  FlatList,
  ScrollView
} from "react-native";
import NewsCard from "../component/NewsCard";

import newAPI from "../api/News";

const News = ({ navigation }) => {
  const [news, setNews] = useState([]);

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
    newAPI
      .get("top-headlines?country=us&apiKey=245b4ed876e344d0a083dc5c4604eba9")
      .then(async function (response) {
        setNews(response.data);
        console.log(news);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  if (!news) {
    return null;
  }

  return (
    <View>
      <FlatList
        data={news.articles}
        keyExtractor={(item, index) => "key" + index}
        renderItem={({ item }) => {
          return <NewsCard item={item} />;
        }}
      />
    </View>
  );
};

export default News;
