import * as React from 'react';
import { View } from 'react-native';
import { Card, Avatar, Dialog, Portal  } from 'react-native-paper';
import { tailwind } from "../lib/tailwind.js"


export default function Cards(props) {
  return (
    <View>
      <Card style={tailwind("mx-4 my-1 rounded-3xl bg-gray-100")}>
        <Card.Title
          title={`${props.name}`}
          subtitle={`Username: ${props.username.toLowerCase()}, Email: (${props.email.toLowerCase()})`}
          left={() => <Avatar.Image size={50} 
                        source={{
                          uri:
                            'https://robohash.org/' +
                            props.username + props.id +
                            'jane?set=set5',
                        }} 
                      />
          }
          onPress={() =>     <Portal>
      <Dialog visible={visible} onDismiss={hideDialog}>
        <Dialog.Actions>
          <Button onPress={() => console.log('Cancel')}>Cancel</Button>
          <Button onPress={() => console.log('Ok')}>Ok</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>}
        />
      </Card>
    </View>
  );
}
