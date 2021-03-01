import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { FOODS } from '../constants/data'
import SpecialFoodItem from './SpecialFoodItem'

const Populars = props => {
  const popularItems = FOODS.filter(food=>food.rating>4)
  return <FlatList
    style={styles.populars}
    data={popularItems}
    renderItem={({item})=> <SpecialFoodItem food={item} /> }
    keyExtractor={(item, index) => item.id+index.toString()}
    horizontal
    showsHorizontalScrollIndicator={false}
  />
 }

const styles = StyleSheet.create({
  populars: {
    paddingLeft:15
  }
})

export default Populars;