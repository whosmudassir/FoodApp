import React from 'react';
import {View, Text} from 'react-native';
import {Box, Image, Flex, HStack, Button} from 'native-base';
import {cartStore} from '../../mobx/Store';
import {observer} from 'mobx-react';
import {styles} from './styles';
import {colors} from '../../constants/colors';
import {ItemInterface} from '../../types/types';

const CardItem: React.FC<ItemInterface> = observer(({item}) => {
  console.log('item-->', item);
  return (
    <View style={styles.container}>
      <Box
        bg="#F2EFEA"
        m={2}
        overflow="hidden"
        rounded="8px"
        alignSelf="center"
        width="176px"
        height="274px">
        <Image
          source={{
            uri: item.imageUrl,
          }}
          alt="Alternate Text"
          size={'m'}
          w="176px"
          maxWidth="100%"
          h="122px"
        />
        <View style={{padding: 10}}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.calorieCount}>{item.calorieCount}</Text>
          <Text style={styles.price}>${item.price}</Text>

          <View>
            <Button
              bg={colors.secondary}
              mt={3}
              p={0}
              h={36}
              _pressed={{
                bg: 'white',
                _text: {
                  color: 'black',
                },
              }}
              onPress={() => {
                cartStore.addToCart(item);
              }}>
              ADD
            </Button>
          </View>
        </View>
      </Box>
    </View>
  );
});

export default CardItem;
