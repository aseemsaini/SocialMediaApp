import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  userName: {
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 19,
    marginBottom: 3,
  },
  userLocation: {
    color: '#79869F',
    fontFamily: 'Inter',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 15,
  },
  userInformation: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  userPostInformation: {
    marginLeft: 10,
  },
  image: {
    borderWidth: 1,
    borderRadius: 100,
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
    marginVertical: 16,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 5,
  },
  numbers: {
    fontSize: 14,
    color: '#79869F',
    fontFamily: 'Inter',
    fontWeight: '500',
    marginLeft: 5,
  },
  likes: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 16,
    marginRight: 27,
  },
  comments: {
    flex: 1,
    flexDirection: 'row',
    marginRight: 27,
  },
  bookmarks: {
    flex: 1,
    flexDirection: 'row',
    marginRight: 27,
  },
  info: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: 23,
  },
  postContainer: {
    borderBottomWidth: 1,
    borderBlockEndColor: '#EFF2F6',
    marginBottom: 20,
  },
});

export default style;
