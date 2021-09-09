import React from 'react';
import {View, Text, Button, FlatList} from 'react-native';
import {Image, Box} from 'native-base';
import {cartStore} from '../../mobx/Store';
import {observer} from 'mobx-react';

const Cart = observer(() => {
  return (
    <View style={{flex: 1}}>
      <Text>Cart[{cartStore.cart.length}]</Text>

      <FlatList
        data={cartStore.cart}
        renderItem={({item}) => (
          <View>
            <Box bg="#fff" m={4} rounded="8px" width="356px" height="114px">
              <Text>{item.name}</Text>
              <Image
                source={{
                  uri: item.imageUrl,
                }}
                alt={item.name}
                size={'m'}
                w="96px"
                maxWidth="100%"
                h="52px"
              />
              <Text>${item.price}</Text>
              <Button
                title="remove"
                onPress={() => {
                  cartStore.deleteFromCart(item);
                }}
              />
            </Box>
          </View>
        )}
      />
    </View>
  );
});

export default Cart;
