import {autorun} from 'mobx';
import {StyleSheet} from 'react-native';
import {flex} from 'styled-system';
import {ms, vs, hs} from '../../utils/dimensions';

export const styles = StyleSheet.create({
  headerStyle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerImageStyle: {width: vs(250), height: vs(42)},
  cartSize: {
    color: 'white',
    fontWeight: 'bold',
  },
  logo: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: ms(30),
    marginHorizontal: 30,
    paddingLeft: 55,
    textAlign: 'center',
  },
  cartIcon: {
    color: 'white',
  },
  mapIcon: {
    color: 'white',
    paddingRight: 15,
  },
  drawerIcon: {
    color: 'white',
    paddingLeft: 10,
  },
  cartIconContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingRight: 10,
  },
});
