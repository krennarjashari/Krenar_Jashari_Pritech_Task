import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function Header() {
  return (
    <View style={styles.container}>
        <Text style={styles.subtitle}>All caught up</Text>
        <Text style={styles.title}>My Tasks</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    paddingHorizontal: 24,
  },
  subtitle: {
    color: '#A3A3A3', 
    fontSize: 14,
    fontWeight: 'normal',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 4,
  },
});