import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const NewsCard = ({}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>
        New York Deer Infected With Omicron, Study Finds - The New York Times
      </Text>
      <View style={styles.rowView}>
        <Text style={styles.author}>Emily Anthes, Sabrina Imbler</Text>
        <Text style={styles.publishedAt}>2022-02-08T01:34:03Z</Text>
      </View>
      <Image />
      <Text>
        White-tailed deer on Staten Island have become the first wild animals
        with documented Omicron infections. The coronavirus has now been found
        in deer in 15 states.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: "4%",
    backgroundColor: "#fce44c",
    margin: "4%",
    borderRadius: 8
  },
  rowView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
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
  }
});

export default NewsCard;
