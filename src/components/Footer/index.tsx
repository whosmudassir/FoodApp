import React from 'react';
import {View, Text, FlatList} from 'react-native';

export default function Footer() {
  const details = [
    {title: 'ABOUT US', link: ''},
    {title: 'JOIN THE CLUB', link: ''},
    {title: 'GIFT CARDS', link: ''},
    {title: 'NUTRITION', link: ''},
    {title: 'CONTACT US', link: ''},
    {title: 'CAREERS', link: ''},
  ];

  return (
    <View>
      <Text>
        Warning: indicates that the sodium (salt) content of this item is higher
        than the total daily recommended limit (2300 mg). High sodium intake can
        increase blood pressure and risk of heart disease and stroke.
      </Text>

      <FlatList />
    </View>
  );
}
