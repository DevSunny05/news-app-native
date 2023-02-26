import { Dimensions, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Card, useTheme } from "react-native-paper";

const DetailsCard = (props) => {
  const theme = useTheme();
  return (
    <SafeAreaView >
    <ScrollView>
      <Text
        style={{ color: "black", marginVertical: 10,fontSize:20,fontWeight:'500',marginHorizontal:5 }}
        variant="headlineMedium"
      >
        {props.title}
      </Text>
      <Card
        style={{ backgroundColor: theme.colors.background,marginHorizontal:'auto' }}
        contentStyle={{ width: Dimensions.get("window").width }}
      >
        {props.image_url && (
          <Card.Cover source={{ uri: props.image_url }} style={{marginHorizontal:2}}/>
        )}
        <Card.Content>
          <Text
            textBreakStrategy="highQuality"
            
            style={{ textAlign: "left", marginVertical: 10,fontSize:15,lineHeight:22,fontWeight:'400' }}
          >
            {props.content}
          </Text>
        </Card.Content>
      </Card>
    </ScrollView>
    </SafeAreaView>
  );
};

export default DetailsCard;

const styles = StyleSheet.create({});
