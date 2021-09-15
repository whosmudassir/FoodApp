import {hs, vs, ms} from '../../utils/dimensions';
import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

export const styles = StyleSheet.create({
  input: {
    height: hs(48),
    width: vs(351),
    paddingLeft: 45,
    margin: 12,
    borderWidth: 2,
    padding: 12,
    borderRadius: 24,
    borderColor: colors.searchBar,
  },
  inputContainer: {
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  icon: {
    position: 'absolute',
    left: 25,
    color: '#000',
  },
});
