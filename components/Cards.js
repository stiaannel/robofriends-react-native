import * as React from 'react';
import { View } from 'react-native';
import { Card } from 'react-native-paper';

export default function Cards(props) {
  return (
    <View style={{ backgroundColor: '#1e1e1e' }}>
      <Card style={{ margin: 5 }}>
        <Card.Cover
          source={{
            uri:
              'https://robohash.org/' +
              props.username + props.id +
              'jane?set=set5',
          }}
        />
        <Card.Title
          title={`${props.id}: ${props.name}(${props.username})`}
          subtitle={props.email}
        />
      </Card>
    </View>
  );
}
