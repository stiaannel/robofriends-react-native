import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import Cards from './Cards';
import { ActivityIndicator, Colors } from 'react-native-paper';

export default function CardList({ robots }) {
  const cardComponent = robots.map((user, i) => {
    return (
      <Cards
        key={i}
        id={robots[i].id}
        name={robots[i].name}
        email={robots[i].email}
        username={robots[i].username}
      />
    );
  });
  if (robots.length === 0) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator
          animating={true}
          color={Colors.white}
          size={'large'}
        />
      </View>
    );
  } else {
    return <View>{cardComponent}</View>;
  }
}

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    backgroundColor: '#1e1e1e',
    paddingTop: 50,
  },
});
