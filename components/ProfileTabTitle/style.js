import {StyleSheet} from 'react-native';
import {scaltFontSize} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  title: {
    color: '#022150',
    fontFamily: 'Inter',
    fontSize: scaltFontSize(16),
    fontWeight: '500',
    lineHeight: scaltFontSize(19),
  },
});

export default style;
