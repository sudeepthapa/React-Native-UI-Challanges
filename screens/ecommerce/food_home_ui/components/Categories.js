import React from 'react'
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
// @ts-ignore
import { CATEGORIES } from '../constants/data'

const Categories = props => {

  const buildCategoriesItem = (item) => {
    return <View style={styles.category}>
      <View style={styles.imageContainer}>
        <Image source={{uri:item.image}} style={styles.image} />
      </View>
      <Text style={{fontFamily:'ubuntu-bold', fontSize:13, color:'#444' }}>{item.title}</Text>
    </View>
  }

  return <View style={styles.categories}>
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={CATEGORIES}
      renderItem={({ item }) => buildCategoriesItem(item)}
      keyExtractor = {(item)=>item.id}
    />
  </View>
 }

const styles = StyleSheet.create({
  categories: {
    paddingLeft:15
  },
  category: {
    padding: 10,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 50,
    height: 50,
  },
  imageContainer: {
    backgroundColor: '#eee',
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent:'center',
    marginBottom: 8,
    overflow:'hidden'
  }
})

export default Categories;