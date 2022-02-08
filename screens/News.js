import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  SafeAreaView,
  FlatList,
  ScrollView,
  TextInput
} from "react-native";
import NewsCard from "../component/NewsCard";

import newAPI from "../api/News";

const News = ({ navigation }) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    getNewsFromAPI();
  }, []);

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
    <SafeAreaView>
      <View>
        <TextInput placeholder="Search here ..." style={styles.search} />
        <FlatList
          data={news.articles}
          keyExtractor={(item, index) => "key" + index}
          renderItem={({ item }) => {
            return <NewsCard item={item} />;
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  search: {
    backgroundColor: "white",
    padding: "2%",
    margin: "4%",
    borderRadius: 8
  }
});

export default News;
