import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Button,
  Linking
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Entypo } from "react-native-vector-icons";

const { width, height } = Dimensions.get("window");

const NewsCard = ({ item, navigation }) => {
  const [bookMarkCheck, setBookMarkCheck] = useState(false);

  const bookMark = () => {
    setBookMarkCheck(true);
    console.log(item.author);
  };

  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.author}>{item.author}</Text>
        <Text style={styles.publishedAt}>{item.publishedAt}</Text>
      </View>
      <Text style={styles.title}>{item.title}</Text>
      <Image style={styles.image} source={{ uri: item.urlToImage }} />
      <Text style={styles.description}>{item.description}</Text>
      <View style={styles.rowDisplay}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            Linking.openURL(item.url);
          }}
        >
          <Text style={styles.btnText}>View in browser</Text>
        </TouchableOpacity>

        {/* Will come back to this */}
        <TouchableOpacity onPress={bookMark}>
          {bookMarkCheck === true && (
            <Entypo
              name="bookmark"
              style={[
                bookMarkCheck ? styles.marked : styles.notMarked,
                styles.bookmark
              ]}
              item={item.id}
            />
          )}
        </TouchableOpacity>
      </View>
    </View>
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
  author: { color: "gray" },
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
  },
  button: {
    marginTop: "8%",
    width: "100%",
    backgroundColor: "#546de5",
    padding: "4%",
    borderRadius: 8
  },
  btnText: {
    color: "white",
    textAlign: "center"
  },
  rowDisplay: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  marked: {
    color: "#546de5"
  },
  notMarked: {
    color: "gray"
  },
  bookmark: {
    fontSize: 20,
    paddingTop: "3%"
  }
});

export default NewsCard;
