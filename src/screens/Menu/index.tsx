import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  SafeAreaView,
  ScrollView,
  TextInput,
} from 'react-native';
import {data} from '../../constants/mock-data';
import Card from '../../components/Card';
import Footer from '../../components/Footer';
import {styles} from './styles';

export default function Menu() {
  const [menu, setMenu] = useState(data.categories);
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <TextInput
          style={styles.input}
          placeholder="Steaks, Entress, Drinks etc."
        />

        <FlatList data={menu} renderItem={({item}) => <Card main={item} />} />

        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
}
