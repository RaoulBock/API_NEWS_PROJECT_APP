import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  FlatList,
  ScrollView,
  TouchableOpacity
} from "react-native-gesture-handler";

import tw from "tailwind-react-native-classnames";

import { Entypo } from "react-native-vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

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
      screen: "Feed",
      color: "#546de5",
      icons: "open-book",
      bigTitle: "Feed"
    },
    {
      id: "3",
      screen: "Post",
      color: "#c44569",
      icons: "paper-plane",
      bigTitle: "Post"
    }
  ];

  return (
    <SafeAreaView style={{ backgroundColor: "#f9f9fb" }}>
      <ScrollView>
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

          <View style={styles.listings}>
            <View style={styles.listingbusiness}>
              <Text style={styles.text}>business</Text>
            </View>
            <View>
              <Text style={styles.text}>entertainment</Text>
            </View>
            <View>
              <Text style={styles.text}>environment</Text>
            </View>
            <View>
              <Text style={styles.text}>food</Text>
            </View>
            <View>
              <Text style={styles.text}>health</Text>
            </View>
            <View>
              <Text style={styles.text}>politics</Text>
            </View>
            <View>
              <Text style={styles.text}>science</Text>
            </View>
            <View>
              <Text style={styles.text}>sports</Text>
            </View>
            <View>
              <Text style={styles.text}>technology</Text>
            </View>
            <View>
              <Text style={styles.text}>top</Text>
            </View>
            <View>
              <Text style={styles.text}>world</Text>
            </View>
          </View>
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
  }
});
