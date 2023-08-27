import React from 'react';
import {View, Text, Image} from 'react-native';
import propTypes from 'prop-types';
import style from './style';

const UserStory = prop => {
  return (
    <View style={style.storyContainer}>
      <View style={style.userImageContainer}>
        <Image source={require('../../assets/images/default_profile.png')} />
      </View>
      <Text style={style.userNameText}>{prop.firstName}</Text>
    </View>
  );
};

UserStory.propTypes = {
  firstName: propTypes.string.isRequired,
};
export default UserStory;
