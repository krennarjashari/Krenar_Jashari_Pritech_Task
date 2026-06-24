import React from 'react'
import { View, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';

function HomeScreen() {
  return (
    <View style={styles.webViewportCenter}>
        <SafeAreaView className='w-full max-w-[430px] h-full bg-[#0F2038] relative'>

            <ScrollView contentContainerStyle={{flexGrow:1}}>
                <Header/>
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
    position: 'relative',
    overflow: 'hidden',
  },
  scrollLayout: {
    flexGrow: 1,
    paddingBottom: 120, 
  },
  floatingActionButton: {
    position: 'absolute',
    bottom: 36,
    right: 24,
    backgroundColor: '#FFFFFF', 
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
});