import React from 'react'
import { View, Text, StyleSheet, StatusBar, Pressable, TouchableNativeFeedback } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const IntroScreen = props => {

  const createButton = () => {
    return <TouchableNativeFeedback onPress={() => props.navigation.navigate('UIScreen')}>
      <View style={styles.button}>
        <Text style={{ color: '#537D8D', fontWeight: 'bold' }}>Lets get started</Text>
        <Ionicons name="arrow-forward" color='#537D8D' size={ 18 }/>
      </View>
    </TouchableNativeFeedback>
  }

  return <View style={styles.screen}>
    <StatusBar translucent backgroundColor="transparent" />
    <View style={[styles.padding_20, styles.header]}>
      <Text style={styles.text}>Welcome to React Native UI Challanges</Text>
      {createButton()}
    </View>
    <View  style={[styles.padding_20]}>
      <TouchableNativeFeedback onPress={() => props.navigation.navigate('About')}>
        <View style={styles.card}>
          <View style={styles.row}>
            <Ionicons name="person" color="#537D8D" size={ 18 } />
            <Text style={styles.menuText}>About Us</Text>
          </View>
        </View>
      </TouchableNativeFeedback>
    </View>
  </View>
}

const styles = StyleSheet.create({

  screen: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 32,
    textAlign: 'center',
    color: 'white',
    marginBottom: 20
  },
  padding_20: {
    padding: 20,
  },
  card: {
    padding: 15,
    elevation:1,
    shadowColor: 'black',
    shadowOffset: {
      height: 2,
      width:2
    },
    shadowOpacity: 0.4,
    shadowRadius: 50,
  },
  header: {
    height: 300,
    backgroundColor: '#537D8D',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderColor: 'white',
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center'
  },
  menuText: {
    fontSize: 18,
    marginLeft:10
  }
})

export default IntroScreen;