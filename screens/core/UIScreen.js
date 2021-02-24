import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import Routes from '../../constants/routes'
import { List, Menu } from 'react-native-paper';

const UIScreen = props => {
  return <View>
    {
      Routes.map(data => {
        return <List.Accordion
        title={data.title}
        titleStyle={{color:'#537D8D'}}
        left={props => <List.Icon {...props} icon="folder" color="#537D8D" />}>
          {
            // @ts-ignore
            data.routes.map(route => {
              return <List.Item
                onPress={() => props.navigation.navigate(route.route)}
                title={route.title}
                style={{paddingLeft:50}}
                left={props => <List.Icon {...props} icon="react" />}
                />
            })
        }
        
      </List.Accordion>
      })
    }
  </View>
}

const styles = StyleSheet.create({})

export default UIScreen;