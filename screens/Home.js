import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Appbar, Chip } from "react-native-paper";
const categories = ["Top","Technology", "Sports", "Politics", "Health", "Business","Food"];
const API_KEY = "pub_178175a1c693b7d91447b96a01b2efb15f93b";
// https://newsdata.io/api/1/news?apikey=pub_178175a1c693b7d91447b96a01b2efb15f93b

const Home = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const handleSelect = (val) => {
    setSelectedCategories((prev) =>
      prev.find((p) => p === val)
        ? prev.filter((cat) => cat !== val)
        : [...prev, val]
    );
  };
  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Home"></Appbar.Content>
      </Appbar.Header>
      <View style={styles.filterContainer}>
        {categories.map((cat) => (
          <Chip
            key={cat}
            mode='outlined'
            style={styles.chipItem}
            showSelectedOverlay
            selected={selectedCategories.find((c) =>
              cat === c ? true : false
            )}
            onPress={() => handleSelect(cat)}
            textStyle={{ fontWeight: "400", color: "black", padding: 1 }}
          >
            {cat}
          </Chip>
        ))}
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  filterContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: 10,
  },
  chipItem: {
    marginHorizontal: 5,
    marginVertical: 5,
  },
});
