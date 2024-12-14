import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function PostDetailScreen({ route }) {
  const { post } = route.params

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{post.title}</Text>
      <Text>{post.content}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 }
})
