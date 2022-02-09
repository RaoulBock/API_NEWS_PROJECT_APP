import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";

import tw from "tailwind-react-native-classnames";

const HomeScreen = ({ navigation }) => {
  const menus = [
    {
      id: "1",
      screen: "News",
      color: "#574b90",
      smallTitle: "N",
      bigTitle: "News"
    },
    {
      id: "2",
      screen: "Books",
      color: "#546de5",
      smallTitle: "B",
      bigTitle: "Books"
    },
    {
      id: "3",
      screen: "Music",
      color: "#e15f41",
      smallTitle: "M",
      bigTitle: "Music"
    },
    {
      id: "4",
      screen: "Calender",
      color: "#e15f41",
      smallTitle: "C",
      bigTitle: "Calender"
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
              tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-1 w-40`,
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
                {item.smallTitle}
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

const styles = StyleSheet.create({});
