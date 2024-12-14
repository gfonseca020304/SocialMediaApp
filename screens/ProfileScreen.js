import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

export default function ProfileScreen({ navigation }) {
  const user = { name: 'John Doe', username: 'johndoe', bio: 'Hello, I am John' }

  return (
    <View style={styles.container}>
      <Text>Name: {user.name}</Text>
      <Text>Username: {user.username}</Text>
      <Text>Bio: {user.bio}</Text>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings', { user })}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 }
})
