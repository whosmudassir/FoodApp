import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, SafeAreaView, ScrollView} from 'react-native';
import {Image, Box, Button, HStack} from 'native-base';
import {cartStore} from '../../mobx/Store';
import {observer} from 'mobx-react';
import {styles} from './styles';
import {colors} from '../../constants/colors';

const Cart = observer(() => {
  const [total, setTotal] = useState();
  useEffect(() => {
    setTotal(cartStore.cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [cartStore.cart]);

  return (
    <View style={styles.cartContainer}>
      <SafeAreaView>
        {cartStore.cart.length ? (
          <View style={styles.subContainer}>
            <ScrollView>
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
                      <Text style={styles.price}>${item.price}</Text>
                      <Button
                        style={styles.removeButton}
                        bg={colors.secondary}
                        w={100}
                        ml={220}
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
            </ScrollView>

            <View style={styles.totalContainer}>
              {/* <HStack safeAreaBottom> */}
              <Text style={styles.grandTotal}>Total : ${total}</Text>
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
