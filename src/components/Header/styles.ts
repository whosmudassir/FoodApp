import {autorun} from 'mobx';
import {StyleSheet} from 'react-native';
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
});
