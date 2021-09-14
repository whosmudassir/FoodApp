import {StyleSheet} from 'react-native';
import {ms, vs, hs} from '../../utils/dimensions';

export const styles = StyleSheet.create({
  cartContainer: {
    margin: ms(15),
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subContainer: {
    display: 'flex',
    flex: 1,
  },
  emptyCart: {},
  grandTotal: {
    fontSize: ms(20),
    fontWeight: 'bold',
    textAlign: 'right',
    padding: 10,
  },
  name: {
    fontWeight: '600',
    fontSize: 15,
  },
  price: {fontWeight: '500', fontSize: 16},
  image: {
    marginVertical: 8,
    borderRadius: 8,
  },
  removeButton: {},
  totalContainer: {},
});
