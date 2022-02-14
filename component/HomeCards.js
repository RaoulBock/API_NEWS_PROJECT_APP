import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import React from "react";

const { width, height } = Dimensions.get("window");

const HomeCards = ({ item, navigation }) => {
  return (
    <View style={{ marginTop: "4%" }}>
      <View
        style={{ backgroundColor: "white", padding: "4%", borderRadius: 8 }}
      >
        <Text>{item.publishedAt}</Text>
        <Text style={styles.title}>{item.title}</Text>
        <Image style={styles.image} source={{ uri: item.urlToImage }} />

        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};

export default HomeCards;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: height / 4,
    borderRadius: 8,
    marginTop: "4%",
    marginBottom: "2%"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black"
  },
  description: {
    color: "gray",
    marginTop: "4%"
  }
});
