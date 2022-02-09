import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React, { useState, useEffect } from "react";

import Business from "../api/businessNews";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
const { width, height } = Dimensions.get("window");
const BusinessListing = ({ navigation }) => {
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    getNewsFromAPI();
  }, []);

  function getNewsFromAPI() {
    Business.get(
      "news?apikey=pub_443797e047a678fc1715a4bcfc75e0552c93&category=business&language=en"
    )
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
  } else if (news && news.results) {
    searchNews = news.results.filter((e) => {
      return `${(e.title, e.description)}`
        .toLowerCase()
        .includes(search.toString().toLowerCase());
    });
  }
  console.log(news.results);

  return (
    <SafeAreaView>
      {searchNews.length > 0 && (
        <FlatList
          data={searchNews}
          horizontal
          keyExtractor={(item, index) => "key" + index}
          renderItem={({ item }) => {
            return (
              <View style={styles.card}>
                <View style={{ padding: "4%" }}>
                  <Image
                    style={styles.image}
                    source={{ uri: item.image_url }}
                  />
                  <Text style={{ fontWeight: "bold" }}>{item.title}</Text>
                </View>
              </View>
            );
          }}
        />
      )}
    </SafeAreaView>
  );
};

export default BusinessListing;

const styles = StyleSheet.create({
  card: {
    width: 200,
    height: 300,
    backgroundColor: "white",

    borderRadius: 12,
    margin: 4
  },
  image: {
    width: "100%",
    height: height / 4,
    borderRadius: 8,
    marginTop: "4%",
    marginBottom: "2%"
  }
});
