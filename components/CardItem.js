import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Card, useTheme } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'


const CardItem = (props) => {
    const theme=useTheme()
    const navigation=useNavigation()

    const handleNavigate=()=>{
      navigation.navigate("NewsOverview",{title:props.title,description:props.description,content:props.content,image_url:props.image_url})

    }
  return (
    <Pressable onPress={handleNavigate} >
        <Card style={{marginVertical:10,backgroundColor:theme.colors.elevation.level5}}>
            <Card.Cover borderRadius={10}  source={{uri:props.image_url}}/>
            <Card.Title title={props.title} subtitle={props.description.split("\n")[0]} titleNumberOfLines={1}></Card.Title>
        </Card>
    </Pressable>
  )
}

export default CardItem

const styles = StyleSheet.create({
    
})