import React from 'react';
import {View, Text, Image, Button} from 'react-native';
import {useNavigation, DrawerActions} from '@react-navigation/native';
import {cartStore} from '../../mobx/Store';
import {observer} from 'mobx-react';
import {Circle} from 'native-base';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/Feather';

const Header = observer(
  ({drawerIcon, toggleDrawerIcon, logo, cartIcon, toggleCartIcon, mapIcon}) => {
    return (
      <View style={styles.headerStyle}>
        {drawerIcon ? (
          <Icon
            name="menu"
            size={26}
            style={styles.drawerIcon}
            onPress={toggleDrawerIcon}
          />
        ) : null}

        {logo ? <Text style={styles.logo}>Food App</Text> : null}

        {mapIcon ? (
          <Icon name="map-pin" size={26} style={styles.mapIcon} />
        ) : null}

        {cartIcon ? (
          <View style={styles.cartIconContainer}>
            <Icon
              style={styles.cartIcon}
              name="shopping-cart"
              size={26}
              onPress={toggleCartIcon}
            />
            {/* {cartStore.cart.length} */}
            <Circle size={5} bg="#dc2626">
              <Text style={styles.cartSize}>{cartStore.cart.length}</Text>
            </Circle>
          </View>
        ) : null}
      </View>
    );
  },
);

export default Header;
