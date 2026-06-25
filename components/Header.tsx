import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function Header() {
  return (
    <View style={styles.container}>
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
  title: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 4,
  },
});