import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaltFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  userName: {
    fontFamily: 'Inter',
    fontSize: scaltFontSize(16),
    fontWeight: '500',
    lineHeight: scaltFontSize(19),
    marginBottom: verticalScale(3),
  },
  userLocation: {
    color: '#79869F',
    fontFamily: 'Inter',
    fontSize: scaltFontSize(12),
    fontWeight: '400',
    lineHeight: scaltFontSize(15),
  },
  userInformation: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  userPostInformation: {
    marginLeft: horizontalScale(8),
  },
  image: {
    borderWidth: 1,
    borderRadius: horizontalScale(100),
    borderColor: '#F35BAC',
    padding: 3,
  },
  postHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  postImage: {
    marginVertical: verticalScale(16),
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: horizontalScale(3),
  },
  numbers: {
    fontSize: scaltFontSize(14),
    color: '#79869F',
    fontFamily: 'Inter',
    fontWeight: '500',
    marginLeft: horizontalScale(5),
  },
  likes: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: horizontalScale(16),
    marginRight: horizontalScale(27),
  },
  comments: {
    flex: 1,
    flexDirection: 'row',
    marginRight: horizontalScale(27),
  },
  bookmarks: {
    flex: 1,
    flexDirection: 'row',
    marginRight: horizontalScale(27),
  },
  info: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: verticalScale(23),
  },
  postContainer: {
    borderBottomWidth: 1,
    borderBlockEndColor: '#EFF2F6',
    marginBottom: verticalScale(20),
  },
});

export default style;
