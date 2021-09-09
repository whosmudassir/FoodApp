import React from 'react';
import {View, Text, Button} from 'react-native';
import {cartStore} from '../../mobx/Store';
import {observer} from 'mobx-react';

const Cart = observer(() => {
  return (
    <View>
      <Text>Cart[{cartStore.cart.length}]</Text>
      {cartStore.cart.map(item => (
        <>
          <Text>{item.name}</Text>
          <Button
            title="remove"
            onPress={() => {
              cartStore.deleteFromCart(item);
            }}
          />
        </>
      ))}
    </View>
  );
});

export default Cart;
