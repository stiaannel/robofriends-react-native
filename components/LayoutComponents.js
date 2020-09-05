import React, { useState, BackHandler } from 'react';
import { Appbar } from 'react-native-paper';
import { View, StatusBar, StyleSheet, Platform } from 'react-native';

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

export function NavPanel() {
  return (
    <Appbar.Header dark={true} statusBarHeight={0}>
      <Appbar.Content
        title="React Native App"
        subtitle={'stiaannel.github.io'}
      />
    </Appbar.Header>
  );
}

export function StatusBarConfig() {
  const [visibleStatusBar, setVisibleStatusBar] = useState(false);
  const [styleStatusBar, setStyleStatusBar] = useState('light-content');
  return (
    <View>
      <StatusBar backgroundColor="#000" barStyle={styleStatusBar} />
      <StatusBar hidden={visibleStatusBar} />
    </View>
  );
}

const styles = StyleSheet.create({});
