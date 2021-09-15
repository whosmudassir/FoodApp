import {hs, vs, ms} from '../../utils/dimensions';
import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {backgroundColor: '#fff', flex: 1},
  name: {
    fontWeight: 'bold',
  },
  calorieCount: {
    paddingBottom: hs(20),
  },
  price: {
    fontWeight: 'bold',
  },
});
