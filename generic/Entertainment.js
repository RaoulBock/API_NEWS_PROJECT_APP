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

const Entertainment = ({ navigation }) => {
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState("");
  const NothingFound = require("../assets/Nothing.gif");

  useEffect(() => {
    getNewsFromAPI();
  }, []);

  function getNewsFromAPI() {
    newAPI
      .get(
        "top-headlines/sources?country=us&category=entertainment&apiKey=245b4ed876e344d0a083dc5c4604eba9"
      )
      .then(async function (response) {
        setNews(response.data);
        console.log(news);
      })
      .catch(function (error) {
        // console.log(error);
      });
  }
  let searchNews = [];
  if (!news) {
    return null;
  } else if (news && news.sources) {
    searchNews = news.sources.filter((e) => {
      return `${e.title || e.description}`
        .toLowerCase()
        .includes(search.toString().toLowerCase());
    });
  }

  return (
    <SafeAreaView style={{ backgroundColor: "#f9f9fb" }}>
      <View>
        {searchNews.length > 0 && (
          <FlatList
            data={searchNews}
            horizontal
            keyExtractor={(item, index) => "key" + index}
            renderItem={({ item }) => {
              return (
                <View
                  style={{
                    backgroundColor: "white",
                    margin: 8,
                    height: 250,
                    width: 300,
                    padding: "8%",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 12
                  }}
                >
                  <View>
                    <Text style={styles.author}>{item.name}</Text>
                    <Text style={styles.publishedAt}>{item.description}</Text>
                  </View>
                </View>
              );
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
  author: {
    fontWeight: "bold",
    color: "black",
    fontSize: 28
  },
  publishedAt: {
    color: "black",
    marginTop: "12%",
    fontSize: 15,
    lineHeight: 20
  }
});

export default Entertainment;