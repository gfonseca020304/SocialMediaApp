import React, { useState } from 'react'
import { View, Text, FlatList, TextInput, StyleSheet, TouchableOpacity } from 'react-native'

export default function HomeScreen({ navigation }) {
  const [posts, setPosts] = useState([
    { id: '1', title: 'First Post', content: 'This is the first post' },
    { id: '2', title: 'Second Post', content: 'This is the second post' }
  ])
  const [searchQuery, setSearchQuery] = useState('')

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search posts"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <FlatList
        data={filteredPosts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('PostDetail', { post: item })}>
            <Text style={styles.postTitle}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  searchBar: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 },
  postTitle: { fontSize: 18, padding: 10, borderBottomWidth: 1 }
})

