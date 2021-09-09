import React from 'react';
import {View, Text, Image, Button} from 'react-native';
import {useNavigation, DrawerActions} from '@react-navigation/native';
import {cartStore} from '../../mobx/Store';
import {observer} from 'mobx-react';

const Header = observer(() => {
  const navigation = useNavigation();
  return (
    <View style={{display: 'flex', flexDirection: 'row'}}>
      <Button
        title="|||"
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      />
      <Image
        style={{width: 200, height: 44, paddingBottom: 10}}
        source={require('../../assests/images/logo.png')}
      />
      <Button title="Cart" onPress={() => navigation.navigate('Cart')} />
    </View>
  );
});

export default Header;
