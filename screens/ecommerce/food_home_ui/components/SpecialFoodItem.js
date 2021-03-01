import React from 'react'
import { View, Text, StyleSheet, Dimensions, ImageBackground, Pressable } from 'react-native'
import Title from './Title';
import {Ionicons} from '@expo/vector-icons'
import COLORS from '../constants/colors';
import { useNavigation } from '@react-navigation/native';
import Toast from '../../../../components/common/Toast';

const SpecialFoodItem = ({ food }) => {
  const totalRating = new Array(5).fill(1);
  const navigation = useNavigation();
  return <View style={styles.item}>
    <ImageBackground source={{uri:food.image}} style={styles.imageContainer}>
      <View style={[styles.imageContainer, styles.image]}>
        <Ionicons name="heart" size={24} color={COLORS.primary} />
      </View>                       
    </ImageBackground>
    <Pressable onPress={() => Toast.showToastWithGravity(food.title) }>
      <Title containerStyle={{ paddingHorizontal: 0, paddingTop: 8, paddingBottom:0 }}> {food.title} </Title>
      <Text style={styles.subtitle}>{food.subtitle}</Text>
      <View style={styles.priceSection}>
        <View style={styles.priceSection}>
          {
            totalRating.map((rat, i) => {
              if (Math.floor(food.rating) >= i + 1) {
                return <Ionicons name="star" color="orange"/>
              } else if(Math.floor(food.rating) !== Math.ceil(food.rating)){
                return <Ionicons name="star-half" color="orange"/>
              }
              return <Ionicons name="star" color='grey'/>
            })
          }
        </View>
        <Title containerStyle={{ paddingHorizontal: 8, paddingTop: 0, paddingBottom:0 }} style={{color: COLORS.primary}}>Rs { food.price }</Title>
      </View>
    </Pressable>
  </View>
 }

const styles = StyleSheet.create({
  imageContainer: {
    height: 140,
    width: Dimensions.get('window').width * 0.7,
    borderRadius: 8,
    overflow:'hidden'
  },
  item:{
    marginRight: 20,
  },
  image:{
    padding: 10,
    alignItems:'flex-end'
  },
  subtitle: {
    fontSize: 12,
    paddingLeft: 5,
    fontFamily: 'ubuntu',
    color: '#666'
  },
  priceSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal:3
  },
})

export default SpecialFoodItem;