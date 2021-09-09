import React from 'react';
import {View, Text} from 'react-native';
import {Box, Image, Flex, Button} from 'native-base';
import {cartStore} from '../../mobx/Store';
import {observer} from 'mobx-react';
import {styles} from './styles';
import {colors} from '../../constants/colors';

const CardItem = observer(({item}) => {
  console.log('colors->', colors.secondary);
  return (
    <View>
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
        <View style={{padding: 5}}>
          <Text>{item.name}</Text>
          <Text>{item.calorieCount}</Text>
          <Text>${item.price}</Text>

          <Button
            bg={colors.secondary}
            mx={2}
            mt={10}
            _pressed={{
              bg: 'white',
              _text: {
                color: 'black',
              },
            }}
            onPress={() => {
              cartStore.addToCart(item);
            }}>
            add
          </Button>
        </View>
      </Box>
    </View>
  );
});

export default CardItem;
