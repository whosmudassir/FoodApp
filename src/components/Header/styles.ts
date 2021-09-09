import {StyleSheet} from 'react-native';
import {ms, vs, hs} from '../../utils/dimensions';

export const styles = StyleSheet.create({
  headerStyle: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  headerImageStyle: {width: vs(280), height: vs(44)},
});
