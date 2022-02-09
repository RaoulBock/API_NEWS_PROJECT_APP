import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  SafeAreaView,
  FlatList,
  ScrollView,
  TextInput,
  Image
} from "react-native";
import NewsCard from "../component/NewsCard";

import newAPI from "../api/News";

const News = ({ navigation }) => {
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState("");
  const NothingFound = require("../assets/Nothing.gif");

  useEffect(() => {
    getNewsFromAPI();
  }, []);

  function getNewsFromAPI() {
    newAPI
      .get("top-headlines?country=us&apiKey=245b4ed876e344d0a083dc5c4604eba9")
      .then(async function (response) {
        setNews(response.data);
        // console.log(news);
      })
      .catch(function (error) {
        // console.log(error);
      });
  }
  let searchNews = [];
  if (!news) {
    return null;
  } else if (news && news.articles) {
    searchNews = news.articles.filter((e) => {
      return `${e.title || e.description}`
        .toLowerCase()
        .includes(search.toString().toLowerCase());
    });
  }

  return (
    <SafeAreaView style={{ backgroundColor: "#f9f9fb" }}>
      <View style={{ height: "100%" }}>
        <TextInput
          placeholder="Search here ..."
          type="search"
          style={styles.search}
          onChangeText={(e) => {
            setSearch(e);
          }}
        />
        {searchNews.length > 0 && (
          <FlatList
            data={searchNews}
            keyExtractor={(item, index) => "key" + index}
            renderItem={({ item }) => {
              return <NewsCard item={item} />;
            }}
          />
        )}

        {searchNews.length === 0 && (
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              flex: 1
            }}
          >
            <Image
              source={NothingFound}
              style={{
                width: 200,
                height: 200
              }}
            />
          </View>
        )}
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
