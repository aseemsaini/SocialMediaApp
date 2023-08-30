import {StyleSheet} from 'react-native';
import {horizontalScale, scaltFontSize, verticalScale} from './scaling';

const style = StyleSheet.create({
  header: {
    paddingTop: verticalScale(30),
    paddingLeft: horizontalScale(26),
    paddingRight: horizontalScale(17),
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  messageIcon: {
    backgroundColor: '#F9FAFB',
    borderRadius: 100,
    padding: horizontalScale(12),
  },
  messageNumberContainer: {
    width: 10,
    height: 10,
    backgroundColor: '#F35BAC',
    borderRadius: horizontalScale(100),
    position: 'absolute',
    right: verticalScale(8),
    top: horizontalScale(10),
  },
  messageNumber: {
    fontSize: scaltFontSize(6),
    fontFamily: 'Inter',
    fontWeight: '600',
    lineHeight: 7,
    paddingTop: verticalScale(1),
    paddingLeft: horizontalScale(3),
    color: '#FFFFFF',
  },
  userStoriesContainer: {
    paddingHorizontal: horizontalScale(26),
    marginTop: verticalScale(12),
  },
  userPostContainer: {
    lineHeight: '100%',
    paddingHorizontal: horizontalScale(24),
    marginTop: verticalScale(20),
  },
});

export default style;
