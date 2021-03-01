import React from 'react';
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'
import AppNavigator from './navigations/AppNavigator';


export default function App() {
  const [isReady, setIsReady] = React.useState(false);
  const fetchFonts = () => {
    return Font.loadAsync({
      // @ts-ignore
      'ubuntu-bold': require('./assets/fonts/Ubuntu-Bold.ttf'),
      // @ts-ignore
      'ubuntu': require('./assets/fonts/Ubuntu-Regular.ttf')
    });
  }

  if (!isReady) return <AppLoading onError={(err)=>console.log(err)} startAsync={fetchFonts} onFinish={()=>setIsReady(true)} />
  return <AppNavigator />;
}
