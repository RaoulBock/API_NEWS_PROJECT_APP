import { StyleSheet, Text, View } from "react-native";
import React from "react";

const sugNewsCard = () => {
  return (
    <View style={styles.card}>
      <Text style={{ color: "black" }}>{item.title}</Text>
    </View>
  );
};

export default sugNewsCard;

const styles = StyleSheet.create({
  card: {
    width: 200,
    height: 200,
    backgroundColor: "red",
    padding: "4%"
  }
});
