import React, { Component } from 'react';
import { registerRootComponent } from 'expo';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import CardList from './components/CardList';
import { NavPanel, StatusBarConfig } from './components/LayoutComponents';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import SearchBar from './components/SearchBar';
import { tailwind } from './lib/tailwind';

const theme = {
  ...DefaultTheme,
  roundness: 5,
  dark: true,
  mode: 'exact',
  colors: {
    ...DefaultTheme.colors,
    primary: '#000000',
    accent: '#1e1e1e',
    background: '#1e1e1e',
    surface: '#fff',
    backdrop: '#1e1e1e',
  },
};

export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <App />
    </PaperProvider>
  );
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchvalue: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((r) => r.json())
      .then((ro) => this.setState({ robots: ro }));
  }

  onChange = (e) => {
    this.setState({ searchvalue: e });
  };

  render() {
    const filteredData = this.state.robots.filter((robots) => {
      return robots.name
        .toLowerCase()
        .includes(this.state.searchvalue.toLowerCase());
    });
    return (
      
      <View style={tailwind("h-full bg-black p-3")}>
      <NavPanel />
      <SearchBar onSChange={this.onChange} />
      <StatusBarConfig />
      <ScrollView>
        <CardList robots={filteredData} />
      </ScrollView>
    </View>
    );
  }
}

registerRootComponent(Main);