import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import CreatePostScreen from '../screens/CreatePostScreen'

const Tab = createBottomTabNavigator()

export default function HomeTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={HomeScreen} />
      <Tab.Screen name="Create Post" component={CreatePostScreen} />
    </Tab.Navigator>
  )
}
