import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DraweContent from './components/DrawerContent';

const Drawer = createDrawerNavigator();
import HomeScreen from './src/pages/screens/HomeScreen';
import DetailsSceeen from './src/pages/screens/DetailsScreen';

// delete warnings
import {LogBox} from 'react-native';
LogBox.ignoreLogs(['Reanimated 2']);

import {StatusBar} from 'react-native';
import {COLORS} from './src/consts';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
      <Drawer.Navigator
        drawerStyle={{
          backgroundColor: '#c6cbef',
          width: 240,
        }}
        screenOptions={{
          headerShown: false,
        }}
        drawerContent={props => <DraweContent {...props} />}
        drawerPosition="right">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Details" component={DetailsSceeen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
