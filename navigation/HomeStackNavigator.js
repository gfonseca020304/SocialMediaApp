import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeTabNavigator from './HomeTabNavigator'
import PostDetailScreen from '../screens/PostDetailScreen'

const Stack = createStackNavigator()

export default function HomeStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="HomeTabs">
      <Stack.Screen name="HomeTabs" component={HomeTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="PostDetail" component={PostDetailScreen} />
    </Stack.Navigator>
  )
}
