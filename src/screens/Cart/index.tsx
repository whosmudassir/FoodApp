import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, SafeAreaView, ScrollView} from 'react-native';
import {Image, Box, Button} from 'native-base';
import {cartStore} from '../../mobx/Store';
import {observer} from 'mobx-react';
import {styles} from './styles';

const Cart = observer(() => {
  const [total, setTotal] = useState();
  useEffect(() => {
    setTotal(cartStore.cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [cartStore.cart]);

  return (
    <View style={styles.cartContainer}>
      <SafeAreaView>
        <ScrollView>
          {cartStore.cart.length ? (
            <>
              <FlatList
                data={cartStore.cart}
                renderItem={({item}) => (
                  <View>
                    <Box
                      bg="#fff"
                      m={4}
                      rounded="8px"
                      width="356px"
                      height="114px">
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
                        onPress={() => {
                          cartStore.deleteFromCart(item);
                        }}>
                        REMOVE
                      </Button>
                    </Box>
                  </View>
                )}
              />
              <View>
                <Text>Total : ${total}</Text>
                <Button disabled={cartStore.cart.length === 0}>
                  Place Order
                </Button>
              </View>
            </>
          ) : (
            <Text style={styles.emptyCart}>
              Your cart is empty, place an order
            </Text>
          )}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
});

export default Cart;
