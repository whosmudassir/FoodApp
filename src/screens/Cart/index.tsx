import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, SafeAreaView, ScrollView} from 'react-native';
import {Image, Box, Button, HStack} from 'native-base';
import {cartStore} from '../../mobx/Store';
import {observer} from 'mobx-react';
import {styles} from './styles';
import {colors} from '../../constants/colors';
import Icon from 'react-native-vector-icons/Feather';

const Cart = observer(() => {
  return (
    <View style={styles.cartContainer}>
      <SafeAreaView>
        {console.log('cart-->', cartStore.cart)}
        {cartStore.cart.length ? (
          <View style={styles.subContainer}>
            <FlatList
              data={cartStore.cart}
              renderItem={({item}) => (
                <View>
                  <Box
                    bg="#fff"
                    my={2}
                    p={5}
                    rounded="8px"
                    width="356px"
                    height="135px">
                    <Text style={styles.name}>{item.name}</Text>
                    <Image
                      style={styles.image}
                      source={{
                        uri: item.imageUrl,
                      }}
                      alt={item.name}
                      size={'m'}
                      w="96px"
                      maxWidth="100%"
                      h="52px"
                    />
                    <Text style={styles.price}>${item.price.toFixed(2)}</Text>
                    <View style={styles.quantity}>
                      <Icon
                        name="minus-circle"
                        size={22}
                        onPress={() => {
                          cartStore.itemDec(item.id, item.mainPrice);
                        }}
                      />
                      <Text>{item.quantity}</Text>
                      <Icon
                        name="plus-circle"
                        size={22}
                        onPress={() => {
                          cartStore.itemInc(item.id, item.mainPrice);
                        }}
                      />
                    </View>

                    <Button
                      style={styles.removeButton}
                      bg={colors.secondary}
                      w={100}
                      h={10}
                      ml={220}
                      size="sm"
                      mt={-45}
                      _pressed={{
                        bg: 'white',
                        _text: {
                          color: 'black',
                        },
                      }}
                      onPress={() => {
                        cartStore.deleteFromCart(item);
                      }}>
                      REMOVE
                    </Button>
                  </Box>
                </View>
              )}
            />

            <View style={styles.totalContainer}>
              {/* <HStack safeAreaBottom> */}
              <Text style={styles.grandTotal}>
                Total : ${cartStore.total.toFixed(2)}
              </Text>
              <Button
                bg={colors.secondary}
                _pressed={{
                  bg: 'white',
                  _text: {
                    color: 'black',
                  },
                }}
                disabled={cartStore.cart.length === 0}>
                Place Order
              </Button>
              {/* </HStack> */}
            </View>
          </View>
        ) : (
          <Text style={styles.emptyCart}>
            Your cart is empty, place an order
          </Text>
        )}
      </SafeAreaView>
    </View>
  );
});

export default Cart;
