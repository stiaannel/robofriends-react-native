import * as React from 'react';
import { Searchbar, Button } from 'react-native-paper';
import { View, Text } from 'react-native';
import { tailwind } from "../lib/tailwind.js"

export default function SearchBar({ searchvalue, onSChange }) {
  return (
    <View style={tailwind("bg-black")}>
      <Searchbar
        placeholder="Search"
        onChangeText={onSChange}
        value={searchvalue}
      />
    </View>
  );
}
