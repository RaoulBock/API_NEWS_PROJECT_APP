import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");

const NewsCard = ({ item }) => {
  return (
    <TouchableOpacity>
      <View style={styles.card}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "4%"
          }}
        >
          <Text style={styles.author}>{item.author}</Text>
          <Text style={styles.publishedAt}>{item.publishedAt}</Text>
        </View>
        <Text style={styles.title}>{item.title}</Text>
        <Image style={styles.image} source={{ uri: item.urlToImage }} />
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: "4%",
    backgroundColor: "#fff",
    margin: width * 0.05,
    borderRadius: 8
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black"
  },
  author: { color: "gray", fontWeight: "bold" },
  publishedAt: {
    color: "gray",
    fontSize: 12
  },
  description: {
    color: "gray",
    marginTop: "4%"
  },
  image: {
    width: "100%",
    height: height / 4,
    borderRadius: 8,
    marginTop: "4%",
    marginBottom: "2%"
  }
});

export default NewsCard;
