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
import CardItem from '../../components/CardItem';
import Icon from 'react-native-vector-icons/Feather';

export default function Menu() {
  const [menu, setMenu] = useState(data.categories);
  const [searchText, setSearchText] = useState('');

  const food = [];

  data.categories.map(main => (
    <>
      {main.items
        ? main.items.map(item => {
            return food.push(item);
          })
        : main.subCategories.map(item => (
            <p>
              {item.items.map(item => {
                return food.push(item);
              })}
            </p>
          ))}
      <br />
    </>
  ));

  console.log('food->', food);

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={styles.inputContainer}>
          <Icon name="search" size={26} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Steaks, Entress, Drinks etc."
            value={searchText}
            onChangeText={value => setSearchText(value)}
          />
        </View>
        {searchText === ''
          ? menu.map(item => {
              return <Card main={item} />;
            })
          : food
              .filter(item => {
                if (
                  item.name.toLowerCase().includes(searchText.toLowerCase())
                ) {
                  console.log('this item->', item);
                  return item;
                } else {
                  console.log('nothing');
                  return null;
                }
              })
              .map(item => {
                console.log('map->', item);

                return <CardItem item={item} />;
              })}

        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
}
