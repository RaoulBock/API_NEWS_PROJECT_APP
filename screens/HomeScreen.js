import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
  TextInput,
  Dimensions,
  Picker
} from "react-native";
import React, { useState, useEffect } from "react";

import { AntDesign } from "react-native-vector-icons";

// import { Entypo } from "react-native-vector-icons";
import HomeCards from "../component/HomeCards";

import newAPI from "../api/News";

const { width, height } = Dimensions.get("window");

const HomeScreen = ({ navigation }) => {
  const menus = [
    {
      id: "1",
      screen: "HomeScreen",
      bigTitle: "For you"
    },
    {
      id: "2",
      screen: "News",
      bigTitle: "News"
    },
    {
      id: "3",
      screen: "Feed",
      bigTitle: "Feed"
    },
    {
      id: "4",
      screen: "Post",
      bigTitle: "Post"
    }
  ];
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState("");
  const NothingFound = require("../assets/nothingFound.gif");

  const [filterEnable, setFilterEnable] = useState(false);

  useEffect(() => {
    getNewsFromAPI();
    filterSection();
  }, []);

  useEffect(() => {}, [news]);

  function getNewsFromAPI() {
    newAPI
      .get(
        "top-headlines?country=us&apiKey=245b4ed876e344d0a083dc5c4604eba9&category=business"
      )
      .then(async function (response) {
        setNews(response.data);
        console.log(news);
      })
      .catch(function (error) {
        // console.log(error);
      });

    // console.log(searchNews);
  }

  function filterSection() {
    return <Picker />;
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
      <View style={{ marginTop: "4%" }}>
        <FlatList
          data={menus}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate(item.screen)}
              style={{ paddingHorizontal: 33, textAlign: "center" }}
            >
              <View>
                <Text style={{ color: "black", fontWeight: "700" }}>
                  {item.bigTitle}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={styles.top}>
        <View>
          <Text style={styles.title}>
            Welcome ~{" "}
            <Text style={{ fontSize: 20, fontWeight: "100" }}>Username</Text>
          </Text>
        </View>
        <View style={styles.gridView}>
          <TextInput
            placeholder="Search here ..."
            type="search"
            style={styles.search}
            onChangeText={(e) => {
              setSearch(e);
            }}
          />

          <TouchableOpacity
            onPress={filterSection}
            onPress={() => {
              filterEnable ? setFilterEnable(false) : setFilterEnable(true);
            }}
          >
            <AntDesign name="filter" style={styles.icon} />
          </TouchableOpacity>
        </View>
        <View>{filterEnable === true ? filterSection() : null}</View>
        <View>
          <Text style={styles.title}>Business</Text>
        </View>
        {searchNews.length > 0 && (
          <FlatList
            data={searchNews}
            keyExtractor={(item, index) => "key" + index}
            renderItem={({ item }) => {
              return <HomeCards item={item} />;
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

export default HomeScreen;

const styles = StyleSheet.create({
  icons: {
    fontSize: 50
  },
  listings: {
    margin: "5%"
  },
  text: {
    fontSize: 20,
    fontWeight: "bold"
  },
  top: {
    paddingHorizontal: 28,
    marginTop: 28
  },
  title: {
    fontSize: 38
  },
  search: {
    backgroundColor: "white",
    padding: "2%",
    margin: "4%",
    borderRadius: 8,
    width: width / 1.4
  },
  gridView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  icon: {
    fontSize: 28
  }
});
