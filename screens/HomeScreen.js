import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView
} from "react-native-gesture-handler";

// import { Entypo } from "react-native-vector-icons";
import HomeCards from "../component/HomeCards";

const HomeScreen = ({ navigation }) => {
  const menus = [
    {
      id: "1",
      bigTitle: "For you",
      screen: "HomeScreen"
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

  return (
    <SafeAreaView style={{ backgroundColor: "#f9f9fb", height: "100%" }}>
      <ScrollView>
        <View>
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
            <Text style={styles.title}>Welcome</Text>
          </View>
          <HomeCards />
        </View>
      </ScrollView>
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
  }
});
