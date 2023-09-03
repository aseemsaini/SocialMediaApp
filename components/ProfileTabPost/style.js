import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  ProfileTabPostContainer: {
    flex: 1,
    paddingTop: verticalScale(10),
    backgroundColor: 'white',
  },
  imagePost: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: horizontalScale(20),
  },
  image: {
    width: horizontalScale(150),
    height: verticalScale(90),
    paddingHorizontal: horizontalScale(20),
  },
  newImages: {
    marginTop: verticalScale(11),
  },
  lastImages: {
    marginBottom: verticalScale(50),
  },
});

export default style;
