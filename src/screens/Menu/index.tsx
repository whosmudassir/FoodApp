import React, {useState, useEffect} from 'react';
import {View, Text, Button, FlatList} from 'react-native';
import {data} from '../../constants/mock-data';
import Card from '../../components/Card';
import Footer from '../../components/Footer';

export default function Menu() {
  return (
    <View style={{flex: 1}}>
      <Text>Menu</Text>
      <FlatList
        data={data.categories}
        renderItem={({item}) => <Card main={item} />}
      />
      <Footer />
    </View>
  );
}
