import React from 'react';
import {View, Text, Button} from 'react-native';
import {Box, Image, Flex} from 'native-base';
import {cartStore} from '../../mobx/Store';
import {observer} from 'mobx-react';

const CardItem = observer(({item}) => {
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
        <Text>{item.name}</Text>
        <Text>{item.calorieCount}</Text>
        <Text>${item.price}</Text>
        <Button
          onPress={() => {
            cartStore.addToCart(item);
          }}
          title="add"
        />
      </Box>
    </View>
  );
});

export default CardItem;
