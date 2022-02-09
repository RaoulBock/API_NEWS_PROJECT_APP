import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";

import sugNewsCard from "../component/sugNewsCard";
import Business from "../api/businessNews";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

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
      <View>
        {searchNews.length > 0 && (
          <FlatList
            data={searchNews}
            horizontal
            keyExtractor={(item, index) => "key" + index}
            renderItem={({ item }) => {
              return (
                <View style={styles.card}>
                  <Text>{item.title}</Text>
                </View>
              );
            }}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default BusinessListing;

const styles = StyleSheet.create({
  card: {
    width: 200,
    height: 200,
    backgroundColor: "#a0fbaa",
    padding: "4%",
    borderRadius: 12,
    margin: 4
  }
});
