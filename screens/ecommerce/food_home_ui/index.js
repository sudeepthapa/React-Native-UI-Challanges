import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import Categories from './components/Categories'
import FoodHeader from './components/FoodHeader'
import Populars from './components/Populars'
import Title from './components/Title'

const FoodHomeScreen = props => {

  React.useLayoutEffect(() => {
    props.navigation.setOptions({headerShown:false})
  })

  return <ScrollView style={styles.screen}>
    <View style={styles.screen}>
      <FoodHeader />
      <Title>Select a category</Title>
      <Categories />
      <Title>Popular</Title>
      <Populars />
      <Title>Popular</Title>
      <Populars />
    </View>
  </ScrollView>
 }

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor:'#fff'
  },
})

export default FoodHomeScreen;