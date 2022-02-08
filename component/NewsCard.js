import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");

const NewsCard = ({}) => {
  return (
    <TouchableOpacity>
      <View style={styles.card}>
        <Text style={styles.publishedAt}>2022-02-08T01:34:03Z</Text>
        <Text style={styles.author}>Emily Anthes, Sabrina Imbler</Text>
        <Text style={styles.title}>
          New York Deer Infected With Omicron, Study Finds - The New York Times
        </Text>
        <Image style={styles.image} />
        <Text style={styles.description}>
          White-tailed deer on Staten Island have become the first wild animals
          with documented Omicron infections. The coronavirus has now been found
          in deer in 15 states.
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: "4%",
    backgroundColor: "#dfe6e9",
    margin: width * 0.1,
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
    width: width,
    height: height / 4
  }
});

export default NewsCard;
