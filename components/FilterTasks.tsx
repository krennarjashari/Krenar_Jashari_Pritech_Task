import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function FilterTasks() {
    const filters=['All', 'Active', 'Done'];
  return (
    <View style={styles.container}>
        {filters.map((filter)=>{
            const isActive=filter==='All';
            return (
                <TouchableOpacity 
                key={filter}
                style={[styles.tabButton, isActive?styles.activeTabButton:styles.inactiveTabButon]}
                activeOpacity={0.8}
                >
                    <Text style={[styles.tabText, isActive?styles.activeTabText:styles.inactiveTabText]}>
                        {filter}
                    </Text>

                </TouchableOpacity>
            )
        })}
    </View>
  )
}

export default FilterTasks

const styles=StyleSheet.create({

})