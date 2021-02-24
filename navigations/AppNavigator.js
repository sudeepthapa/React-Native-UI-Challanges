import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator } from '@react-navigation/stack'
import IntroScreen from '../screens/core/IntroScreen';
import UIScreen from '../screens/core/UIScreen';
import AboutScreen from '../screens/core/AboutScreen';
import Routes from '../constants/routes';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerStyle:{backgroundColor:'#537D8D'}, headerTintColor:'white'}}>
        <Stack.Screen name="Onboarding" component={IntroScreen} options={{headerShown:false}} />
        <Stack.Screen name="UIScreen" component={UIScreen} options={{title:'All UIs'}}/>
        <Stack.Screen name="About" component={AboutScreen} />
        {
          Routes.map(data => {
            // @ts-ignore
            return data.routes.map(route => {
              return <Stack.Screen name={route.route} component={route.component} options={{title:route.title, headerShown: route.showHeader? true :false}} />
            })
          })
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}
