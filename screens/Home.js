import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Appbar, Chip, Button } from "react-native-paper";
import CardItem from "../components/CardItem";
const categories = [
  "Top",
  "Technology",
  "Sports",
  "Politics",
  "Health",
  "Business",
  "Food",
];
const API_KEY = "pub_178175a1c693b7d91447b96a01b2efb15f93b";
// https://newsdata.io/api/1/news?apikey=pub_178175a1c693b7d91447b96a01b2efb15f93b

const Home = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [newsData, setNewsData] = useState([]);
  const [nextPage,setNextPage]=useState("")
  const handleSelect = (val) => {
    setSelectedCategories((prev) =>
      prev.find((p) => p === val)
        ? prev.filter((cat) => cat !== val)
        : [...prev, val]
    );
  };

  const handlePress = async () => {
    const URL = `https://newsdata.io/api/1/news?apikey=${API_KEY}&country=in&language=en${
      selectedCategories.length > 0
        ? `&category=${selectedCategories.join()}`
        : ""
    }${nextPage?.length > 0 ? `&page=${nextPage}`:""}`;
    try {
      await fetch(URL)
        .then((res) => res.json())
        .then((data) => {
          setNewsData((prev)=>[...prev,...data.results])
          setNextPage(data.nextPage)
        })
    } catch (error) {
      console.log(error);
    }
    
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
            mode="outlined"
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
        <Button
          style={styles.button}
          mode="elevated"
          icon={"sync"}
          labelStyle={{ fontSize: 14, margin: "auto" }}
          onPress={handlePress}
        >
          Refress
        </Button>
      </View>
      <FlatList onEndReached={()=>handlePress}
      style={styles.flatList}
        data={newsData}
        renderItem={({ item }) => (
          <CardItem category={item.category}
           content={item.content}
           country={item.country}
           creator={item.creator}
           description={item.description}
           image_url={item.image_url}
           keywords={item.keywords}
           language={item.language}
           link={item.link}
           pubDate={item.pubDate}
           source_id={item.source_id}
           title={item.title}
           video_url={item.video_url}
           
           />
        )}
      />
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
  button: {
    maxWidth: 250,
    padding: 0,
    maxHeight: 40,
  },
  flatList:{
    flex:1,
    height:"auto"
  }
});
