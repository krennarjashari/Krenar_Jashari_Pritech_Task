import React from 'react'
import { View, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import Search from '../components/Search';

function HomeScreen() {
  return (
    <View style={styles.webViewportCenter}>
        <SafeAreaView style={styles.phoneContainer} edges={['right', 'bottom', 'left']}>

            <ScrollView contentContainerStyle={styles.scrollLayout} bounces={false}>
                <Header/>
                <Search/>
            </ScrollView>

        </SafeAreaView>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  webViewportCenter: {
    flex: 1,
    backgroundColor: '#000000', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  phoneContainer: {
    width: '100%',
    maxWidth: 430, 
    height: '100%',
    backgroundColor: '#0F2038', 
  },
  scrollLayout: {
    flexGrow: 1,
    paddingBottom: 40,
  },
});