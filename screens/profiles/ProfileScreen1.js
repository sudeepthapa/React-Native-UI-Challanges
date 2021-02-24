import React from 'react'
import { View, Text, StyleSheet, StatusBar} from 'react-native'

const ProfileScreen1 = props => {

  return <View style={styles.screen}>
    <StatusBar translucent backgroundColor="transparent" />
    <View style={[styles.padding_20, styles.header]}>
      <Text style={styles.text}>Profile Screen One Test</Text>
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

export default ProfileScreen1;