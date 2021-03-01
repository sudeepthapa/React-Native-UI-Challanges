import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const Title = props => {
  return <View style={{...styles.titleContainer, ...props.containerStyle}}>
    <Text style={{ ...styles.title, ...props.style }}>
        {props.children}
    </Text>
  </View>
 }

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    fontFamily:'ubuntu-bold'
  },
  titleContainer: {
    paddingHorizontal: 15,
    paddingVertical:20
  }
})

export default Title;