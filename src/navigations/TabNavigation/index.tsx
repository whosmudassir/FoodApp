import * as React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import OurPicks from '../../screens/OurPicks';
import Reorder from '../../screens/Reorder';
import MainStackNavigator from '../StackNavigation';
import Header from '../../components/Header';
import Menu from '../../screens/Menu';
import CartNavigator from '../StackNavigation';

const Tab = createMaterialTopTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Menu" component={Menu} />
      <Tab.Screen name="Ourpicks" component={OurPicks} />
      <Tab.Screen name="Reorder" component={Reorder} />
    </Tab.Navigator>
  );
}
