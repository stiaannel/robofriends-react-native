import * as React from 'react';
import { Searchbar, Button } from 'react-native-paper';
import { View, Text } from 'react-native';

export default function SearchBar({ searchvalue, onSChange }) {
  return (
    <View style={{ backgroundColor: '#1e1e1e' }}>
      <Searchbar
        placeholder="Search"
        onChangeText={onSChange}
        value={searchvalue}
      />
    </View>
  );
}
