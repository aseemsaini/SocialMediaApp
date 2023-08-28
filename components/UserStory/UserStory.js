import React from 'react';
import {View, Text, Image} from 'react-native';
import propTypes from 'prop-types';
import style from './style';
import UserImage from '../UserImage/UserImage';

const UserStory = prop => {
  return (
    <View style={style.storyContainer}>
      <UserImage />
      <Text style={style.userNameText}>{prop.firstName}</Text>
    </View>
  );
};

UserStory.propTypes = {
  firstName: propTypes.string.isRequired,
};
export default UserStory;
