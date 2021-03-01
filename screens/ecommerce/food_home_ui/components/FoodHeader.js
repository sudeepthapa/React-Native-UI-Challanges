import React from 'react'
import { View, Text, StyleSheet, Image, TextInput } from 'react-native'
import COLORS from '../constants/colors'
import { MaterialIcons } from '@expo/vector-icons'

const FoodHeader = props => {
  return <View style={styles.header}>
    <View style={styles.profile}>
      <Text style={styles.title}>Hello there, <Text style={{color:COLORS.primary }}>Ann!</Text> </Text>
      <Image source={{uri:'https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg'}} style={styles.image} />
    </View>
    <View style={styles.searchBar}>
      <TextInput placeholder="Search products ..." style={{flex:1}} />
      <MaterialIcons name="search" size={28} color="#888" />
    </View>
  </View>
 }

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 15,
    paddingTop:40
  },
  profile: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center'
  },
  title: {
    fontSize: 24,
    fontFamily:'ubuntu-bold',
  },
  image: {
    width: 40,
    height: 40,
    borderRadius:8
  },
  searchBar: {
    width: '100%',
    height: 45,
    backgroundColor: '#eee',
    borderRadius: 5,
    marginTop: 25,
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems:'center'
  }
})

export default FoodHeader;