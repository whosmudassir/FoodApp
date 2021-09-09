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
  const cartNaviagtion = () => {
    navigation.navigate('Cart');
  };
  const toggleDrawer = () => {
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
              hamburgerIcon={true}
              toggleDrawer={toggleDrawer}
              logo={true}
              mapIcon={true}
              cartIcon={true}
              cartNavigation={cartNaviagtion}
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
              hamburgerIcon={false}
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
