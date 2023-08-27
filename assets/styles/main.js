import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  header: {
    paddingTop: 30,
    paddingLeft: 26,
    paddingRight: 17,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  messageIcon: {
    backgroundColor: '#F9FAFB',
    borderRadius: 100,
    padding: 12,
  },
  messageNumberContainer: {
    width: 10,
    height: 10,
    backgroundColor: '#F35BAC',
    borderRadius: 100,
    position: 'absolute',
    right: 8,
    top: 10,
  },
  messageNumber: {
    fontSize: 6,
    fontFamily: 'Inter',
    fontWeight: '600',
    lineHeight: 7,
    paddingTop: 1,
    paddingLeft: 3,
    color: '#FFFFFF',
  },
});

export default style;
