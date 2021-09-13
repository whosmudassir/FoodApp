import React from 'react';
import {View, Text, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {styles} from './styles';

export default function Footer() {
  const details = [
    {title: 'ABOUT US', link: ''},
    {title: 'JOIN THE CLUB', link: ''},
    {title: 'GIFT CARDS', link: ''},
    {title: 'NUTRITION', link: ''},
    {title: 'CONTACT US', link: ''},
    {title: 'CAREERS', link: ''},
  ];

  const socials = {
    facebook: '',
    twitter: '',
    instagram: '',
  };

  const app = {
    googleStore: '',
    playStore: '',
  };

  const otherDetails = [
    {title: 'My Account', link: ''},
    {title: 'Legal Notices', link: ''},
    {title: 'Privacy Notices', link: ''},
    {title: 'Do Not Sell Data Request', link: ''},
    {title: 'Accessibility Statement', link: ''},
    {title: 'Site Map', link: ''},
    {title: 'FAQs', link: ''},
    {title: 'Other Locations', link: ''},
  ];

  return (
    <View style={styles.container}>
      <View style={styles.border}>
        <Text style={styles.warning}>
          Warning:
          <Icon name="alert-triangle" size={26} style={{color: 'black'}} />
          indicates that the sodium (salt) content of this item is higher than
          the total daily recommended limit (2300 mg). High sodium intake can
          increase blood pressure and risk of heart disease and stroke.
        </Text>
      </View>

      <View style={styles.border}>
        <FlatList
          data={details}
          numColumns={3}
          renderItem={({item}) => (
            <Text style={styles.details}>{item.title}</Text>
          )}
        />
      </View>

      <View style={styles.border}>
        <Text style={styles.socials}>
          STAY CONNECTED{' '}
          <Icon name="facebook" size={26} style={{color: 'black'}} />{' '}
          <Icon name="twitter" size={26} style={{color: 'black'}} />{' '}
          <Icon name="instagram" size={26} style={{color: 'black'}} />
        </Text>
      </View>

      <View style={styles.border}>
        <Text style={styles.socials}>GET OUR APP</Text>
      </View>

      <View style={styles.border}>
        <FlatList
          data={otherDetails}
          numColumns={3}
          renderItem={({item}) => (
            <Text style={styles.otherDetails}>{item.title} |</Text>
          )}
        />
        <Text style={styles.allRights}>
          © 2021 RARE Hospitality Managment, LLC. All rights reserved
        </Text>
      </View>
    </View>
  );
}
