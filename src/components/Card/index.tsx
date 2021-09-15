import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {justifyContent} from 'styled-system';
import CardItem from '../CardItem';
import {styles} from './styles';
import {MainInterface} from '../../types/types';

const Card: React.FC<MainInterface> = ({main}) => {
  console.log('main->', main);
  return (
    <View>
      <Text style={styles.headingText}>{main.name}</Text>
      {main.items ? (
        <View>
          <FlatList
            data={main.items}
            numColumns={2}
            renderItem={({item}) => <CardItem item={item} />}
          />
        </View>
      ) : (
        <View>
          {main.subCategories.map(category => (
            <>
              <Text style={styles.categoryText}>{category.name}</Text>
              <View>
                <FlatList
                  data={category.items}
                  numColumns={2}
                  renderItem={({item}) => <CardItem item={item} />}
                />
              </View>
            </>
          ))}
        </View>
      )}
    </View>
  );
};

export default Card;
