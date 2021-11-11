import React from 'react';
import {Avatar, Caption, Drawer} from 'react-native-paper';
import {Text, View, Image} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const DraweContent = props => {
  return (
    <View style={{flex: 1}}>
      <View>
        <View style={{marginLeft: 15, marginTop: 10}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View>
              <Text>Reza salehi</Text>
              <Caption>@Reza SAlehi</Caption>
            </View>
          </View>
        </View>
      </View>
      <DrawerContentScrollView {...props}>
        <Drawer.Section>
          <Drawer.Item
            icon={({color, size}) => (
              <MaterialIcons name="explore" size={size} color={color} />
            )}
            label="Home"
            onPress={() => props.navigation.navigate('Home')}
          />

          <Drawer.Item
            icon={({color, size}) => (
              <MaterialIcons name="verified" size={size} color={color} />
            )}
            label="Detail"
          />
        </Drawer.Section>
      </DrawerContentScrollView>
    </View>
  );
};

export default DraweContent;
