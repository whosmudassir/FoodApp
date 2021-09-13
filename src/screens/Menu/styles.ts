import {hs, vs, ms} from '../../utils/dimensions';
import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

export const styles = StyleSheet.create({
  input: {
    height: hs(48),
    width: vs(351),
    margin: 12,
    borderWidth: 2,
    padding: 12,
    borderRadius: 24,
    borderColor: colors.searchBar,
  },
});
