import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native';
import { SearchIcon } from 'lucide-react-native';

interface SearchProps{
  value:string;
  onChangeText:(text:string)=>void;
}

function Search({value, onChangeText}:SearchProps) {
  return (
    <View style={styles.container}>
        <SearchIcon color="rgba(255, 255, 255, 0.4)" size={18} style={styles.icon}/>

        <TextInput
        style={styles.input}
        placeholder='Search by title..'
        placeholderTextColor="#8E8E93"
        value={value}
        onChangeText={onChangeText}
        />
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'rgba(23, 23, 23, 0.8)',
    marginHorizontal: 24,
    marginTop: 20,
    borderRadius: 12,
    alignItems: 'center',
    paddingHorizontal: 12,
    height: 44,
    borderWidth: 1,
    borderColor: '#262626',
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 16,
    height: '100%',
  },
});