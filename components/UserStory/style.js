import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaltFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  storyContainer: {
    marginRight: horizontalScale(17),
  },
  userNameText: {
    textAlign: 'center',
    paddingTop: verticalScale(8),
    color: '#022150',
    fontSize: scaltFontSize(14),
    lineHeight: horizontalScale(17),
    fontFamily: 'Inter',
    fontWeight: '500',
  },
});

export default style;
