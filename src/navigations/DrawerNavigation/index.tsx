import React from 'react';
import 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Cart from '../../screens/Cart';
import OurPicks from '../../screens/OurPicks';
import Reorder from '../../screens/Reorder';
import TabNavigation from '../TabNavigation';
import MainStackNavigator from '../StackNavigation';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={MainStackNavigator}
        options={{headerShown: false}}
      />
      {/* <Drawer.Screen name="Dashboard" component={MainStackNavigator} /> */}
      <Drawer.Screen name="Our Picks" component={OurPicks} />
      <Drawer.Screen name="Reorder" component={Reorder} />
    </Drawer.Navigator>
  );
}
