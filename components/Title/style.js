import {StyleSheet} from 'react-native';
import {scaltFontSize, verticalScale} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  title: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: scaltFontSize(24),
    lineHeight: scaltFontSize(28),
    color: '#022150',
  },
});

export default style;
