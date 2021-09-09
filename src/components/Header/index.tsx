import React from 'react';
import {View, Text, Image, Button} from 'react-native';
import {useNavigation, DrawerActions} from '@react-navigation/native';
import {cartStore} from '../../mobx/Store';
import {observer} from 'mobx-react';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/Feather';

const Header = observer(
  ({hamburgerIcon, toggleDrawer, logo, cartIcon, cartNavigation, mapIcon}) => {
    return (
      <View style={styles.headerStyle}>
        {hamburgerIcon ? (
          <Icon
            name="menu"
            size={26}
            style={{color: 'white'}}
            onPress={toggleDrawer}
          />
        ) : null}

        {logo ? (
          <Image
            style={styles.headerImageStyle}
            source={require('../../assests/images/logo.png')}
          />
        ) : null}

        {mapIcon ? (
          <Icon name="map-pin" size={26} style={{color: 'white'}} />
        ) : null}

        {cartIcon ? (
          <Icon
            name="shopping-cart"
            size={26}
            style={{color: 'white'}}
            onPress={cartNavigation}
          />
        ) : null}
      </View>
    );
  },
);

export default Header;
