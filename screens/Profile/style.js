import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaltFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  imageContent: {
    borderWidth: 1,
    borderRadius: horizontalScale(100),
    padding: horizontalScale(2),
    borderColor: '#0150EC',
  },
  imageContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: verticalScale(32),
  },
  image: {
    width: horizontalScale(100),
    height: horizontalScale(100),
  },
  textContainer: {
    marginTop: verticalScale(20),
  },
  profileName: {
    fontFamily: 'Inter',
    color: '#022150',
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
  },
  profileStatsContainer: {
    marginHorizontal: horizontalScale(24),
    flexDirection: 'row',
    alignContent: 'space-between',
    justifyContent: 'center',
    marginVertical: verticalScale(20),
  },
  singleStatContainer: {
    paddingHorizontal: horizontalScale(18),
    alignItems: 'center',
  },
  singleStatBorder: {
    borderRightWidth: 1,
    borderColor: '#E9EFF1',
  },
  numberStat: {
    fontFamily: 'Inter',
    color: '#022150',
    fontSize: scaltFontSize(20),
    lineHeight: scaltFontSize(24),
    fontWeight: '600',
  },
  statDefinition: {
    color: '#79869F',
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '400',
    marginTop: verticalScale(5),
  },
  border: {
    marginTop: verticalScale(10),
    borderWidth: 1,
    borderColor: '#EFF2F6',
    marginHorizontal: horizontalScale(28),
    marginVertical: verticalScale(20),
  },
  profileMediaContainer: {
    marginTop: verticalScale(32),
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'space-between',
  },
  profileMediaOptions: {
    color: '#022150',
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default style;
