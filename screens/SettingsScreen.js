import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function SettingsScreen({ route }) {
  const user = route.params?.user

  return (
    <View style={styles.container}>
      <Text>Theme: Light</Text>
      {user && <Text>User: {user.name}</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 }
})
