import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface FilterTasksProps{
  activeTab:string;
  onSelectTab:(tab:string)=>void;
}

function FilterTasks({activeTab, onSelectTab}:FilterTasksProps) {
    const filters=['All', 'Active', 'Done'];
  return (
    <View style={styles.container}>
        {filters.map((filter)=>{
            const isActive=filter===activeTab;
            return (
                <TouchableOpacity 
                key={filter}
                style={[styles.tabButton, isActive?styles.activeTabButton:styles.inactiveTabButton]}
                activeOpacity={0.8}
                onPress={()=>onSelectTab(filter)}
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

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    marginTop: 16,
    gap: 8,
  },
  tabButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 9999,
  },
  activeTabButton: {
    backgroundColor: '#FFFFFF',
  },
  inactiveTabButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.06)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '600',
  },
  activeTabText: {
    color: '#0F2038',
  },
  inactiveTabText: {
    color: '#A3A3A3',
  },
});