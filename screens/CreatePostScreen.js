import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'

export default function CreatePostScreen() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const createPost = () => {
    alert(`Post created: ${title}`)
    setTitle('')
    setContent('')
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={[styles.input, { height: 100 }]}
        placeholder="Content"
        value={content}
        onChangeText={setContent}
        multiline
      />
      <Button title="Create Post" onPress={createPost} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 }
})