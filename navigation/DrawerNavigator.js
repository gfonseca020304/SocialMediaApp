import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeStackNavigator from './HomeStackNavigator'
import ProfileScreen from "../screens/HomeScreen"
import SettingsScreen from '../screens/SettingsScreen'

const Drawer = createDrawerNavigator()

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeStackNavigator} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  )
}

