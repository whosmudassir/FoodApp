import React from 'react';
import Header from '../../components/Header';
import Cart from '../../screens/Cart';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigation from '../TabNavigation';
import {screenStyles} from './styles';
import {useNavigation, DrawerActions} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function MainStackNavigator() {
  const navigation = useNavigation();
  const toggleCartIcon = () => {
    navigation.navigate('Cart');
  };
  const toggleDrawerIcon = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  return (
    <Stack.Navigator screenOptions={screenStyles}>
      <Stack.Screen
        name="Menu"
        component={TabNavigation}
        // options={{headerShown: false}}
        options={{
          headerTitle: () => (
            <Header
              drawerIcon={true}
              toggleDrawerIcon={toggleDrawerIcon}
              logo={true}
              mapIcon={true}
              cartIcon={true}
              toggleCartIcon={toggleCartIcon}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{
          headerTitle: () => (
            <Header
              drawerIcon={false}
              logo={true}
              mapIcon={false}
              cartIcon={false}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
