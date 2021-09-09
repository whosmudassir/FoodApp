import React from 'react';
import {View, Text, Button} from 'react-native';
import Header from '../../components/Header';
import Cart from '../../screens/Cart';
import Menu from '../../screens/Menu';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigation from '../TabNavigation';

const Stack = createNativeStackNavigator();

const screenStyles = {
  headerStyle: {
    backgroundColor: '#000',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

export default function MainStackNavigator() {
  return (
    <Stack.Navigator screenOptions={screenStyles}>
      <Stack.Screen
        name="Menu"
        component={TabNavigation}
        // options={{headerShown: false}}
        options={{headerTitle: () => <Header />}}
      />
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
}

// export default function CartNavigator() {
//   return (
//     <Stack.Navigator screenOptions={screenStyles}>
//       <Stack.Screen name="Cart" component={Cart} />
//     </Stack.Navigator>
//   );
// }
