// @ts-nocheck
import React from "react";
import { View, StyleSheet,Image,ImageBackground } from "react-native";
import { DrawerItem, DrawerContentScrollView } from "@react-navigation/drawer";
import {  Avatar,  Title,  Caption,  Drawer, } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export function DrawerContent(props) {
  return (
     
    <DrawerContentScrollView {...props} contentContainerStyle={{paddingTop:0,marginTop:0}}>
    
      <View style={styles.drawerContent}>
      <ImageBackground source={require('../../assets/splash.png')} style={styles.image}>
        <View style={styles.userInfoSection}>
          <Avatar.Image
            source={{
              uri:
                "https://res.cloudinary.com/ruksa/image/upload/v1587470607/profile/pic012_kdiyqt.jpg",
            }}
            size={75}
          />
          <Title style={styles.title}>Rukmoni Nagarajan</Title>
          <Caption style={styles.caption}>@rukstech</Caption>
      
        </View>
        </ImageBackground>
        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            icon={({ color, size }) => (
              <MaterialCommunityIcons
                name="home-outline"
                color={color}
                size={size}
              />
            )}
            label="Home"
            onPress={() => {}}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <MaterialCommunityIcons name="bookmark-outline" color={color} size={size} />
            )}
            label="WishList"
            onPress={() => {}}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <MaterialCommunityIcons
                name="cart-outline"
                color={color}
                size={size}
              />
            )}
            label="Cart"
            onPress={() => {}}
          />
           <DrawerItem
            icon={({ color, size }) => (
              <MaterialCommunityIcons
                name="tune"
                color={color}
                size={size}
              />
            )}
            label="Preferences"
            onPress={() => {}}
          />
        </Drawer.Section>
        <Drawer.Section title="Account">
        <DrawerItem
            icon={({ color, size }) => (
              <MaterialCommunityIcons
                name="account-outline"
                color={color}
                size={size}
              />
            )}
            label="Profile"
            onPress={() => {}}
          />
                <DrawerItem
            icon={({ color, size }) => (
              <MaterialCommunityIcons
                name="logout"
                color={color}
                size={size}
              />
            )}
            label="LogOut"
            onPress={() => {}}
          />
         
        </Drawer.Section>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  userInfoSection: {
      margin:0,
      paddingTop:80,
    paddingLeft: 20,
    alignItems:'center'
   
  },
  title: {
    color:'#fff',
    fontWeight: "bold",
  },
  caption: {
    color:'#fff',
    fontSize: 14,
    lineHeight: 14,
    paddingBottom:20,
  },
  row: {
   
    marginBottom:10,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});