import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";

import tw from "tailwind-react-native-classnames";

import { Entypo } from "react-native-vector-icons";

const HomeScreen = ({ navigation }) => {
  const menus = [
    {
      id: "1",
      screen: "News",
      color: "#574b90",
      icons: "news",
      bigTitle: "News"
    },
    {
      id: "2",
      screen: "Bookmarks",
      color: "#546de5",
      icons: "open-book",
      bigTitle: "Bookmarks"
    },
    {
      id: "3",
      screen: "Music",
      color: "#e15f41",
      icons: "music",
      bigTitle: "Music"
    },
    {
      id: "4",
      screen: "Messages",
      color: "#c44569",
      icons: "paper-plane",
      bigTitle: "Messages"
    }
  ];

  return (
    <View>
      <FlatList
        data={menus}
        keyExtractor={(item) => item.id}
        horizontal
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate(item.screen)}
            style={[
              tw`p-4 pl-6 pb-8 pt-4 bg-gray-200 m-1 w-40`,
              { backgroundColor: item.color, borderRadius: 12 }
            ]}
          >
            <View>
              <Text
                style={
                  (tw`mt-2 text-sm font-semibold `,
                  { color: "white", fontWeight: "bold", fontSize: 28 })
                }
              >
                <Entypo name={item.icons} style={styles.icons} />
              </Text>
              <Text style={{ color: "white" }}>{item.bigTitle}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  icons: {
    fontSize: 50
  }
});
